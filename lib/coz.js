/**
 * Coz context.
 * @memberof module:coz
 * @inner
 * @constructor Coz
 * @param {object} [config] - Coz configuration.
 */

'use strict'
const argx = require('argx')
const async = require('async')
const eachBud = require('./each_bud')
const EngineSet = require('./sets/engine_set')
const TmplSet = require('./sets/tmpl_set')
const cozLogger = require('coz-logger')
const cozBudLoader = require('coz-bud-loader')
const cozBudWriter = require('coz-bud-writer')
const cozBudRemover = require('coz-bud-remover')
const cozBudCompiler = require('coz-bud-compiler')
const _requireSafely = require('./_require_safely')
const co = require('co')

function _parseConfig (config) {
  return _requireSafely(config) || config || {}
}

/** @lends module:coz~Coz */
function Coz () {
  const s = this
  s.init.apply(s, arguments)
}

Coz.prototype = {
  // --------------------
  // Public properties.
  // --------------------

  /**
   * Initialize a coz context.
   * @constructs module:coz~Coz
   * @param {object} [config] - Coz configuration.
   * @param {object|string} [config.engines] - Rendering engine or it's module file path.
   * @param {object} [config.tmpls] - Predefined templates.
   */
  init (config) {
    const s = this
    config = _parseConfig(config) || {}

    s.engineSet = new EngineSet(_parseConfig(config.engines) || _parseConfig(config.engine))
    s.tmplSet = new TmplSet(_parseConfig(config.tmpls))
    return s
  },
  /**
   * @type {EngineSet}
   */
  engineSet: undefined,
  /**
   * Render files from bud.
   * @param {string|string[]|object|object[]} patterns - Bud file name patterns, or bud instance.
   * @param {object} [options] - Optional settings.
   * @param {boolean} [options.verbose=false] - Log verbose.
   * @param {string} [options.prefix='coz'] - Prefix for coz.
   */
  render (patterns, options) {
    const s = this
    let args = argx(arguments)
    options = options || {}

    /** @deprecated */
    let callback = args.pop('function')

    let name = 'Rendering'
    let startAt = new Date()
    let verbose = !!options.verbose
    let prefix = options.prefix || 'coz'

    let logger = cozLogger({
      prefix,
      verbose: !!verbose
    })
    let loader = cozBudLoader({})
    let compiler = cozBudCompiler({
      resolveEngine: s.engineSet.resolveEngine.bind(s.engineSet),
      resolveTmpl: s.tmplSet.resolveTmpl.bind(s.tmplSet)
    })
    let writer = cozBudWriter({})
    return co(function * () {
      logger.infoStarted(name, startAt)
      return yield new Promise((resolve, reject) => {
        eachBud(patterns, (filename, callback) => {
          async.waterfall([
            function (callback) {
              callback(null, filename)
            },
            function load (bud, callback) {
              loader.load(bud)
                .then(
                  (bud) => callback(null, bud),
                  (err) => callback(err)
                )
            },
            function compile (bud, callback) {
              compiler.compile(bud, callback)
            },
            function write (bud, callback) {
              writer.write(bud, callback)
            },
            function log (bud, callback) {
              logger.logRendering(bud, callback)
            }
          ], callback)
        }, (err, bud) => {
          logger.infoFinished(name, startAt, new Date())
          err ? reject(err) : resolve(bud)
          if (callback) {
            console.warn('callback is now deprecated. Use promise interface instead.')
            callback(err)
          }
        })
      })
    }).catch((err) => {
      console.error(err)
      return Promise.reject(err)
    })
  },
  /**
   * Clean files from bud.
   * @param {string|string[]} patterns - Bud file names.
   * @param {object} [options] - Optional settings.
   * @param {boolean} [options.verbose=false] - Log verbose.
   * @param {string} [options.prefix='coz'] - Log prefix.
   */
  clean (patterns, options) {
    const s = this
    let args = argx(arguments)
    /** @deprecated */
    let callback = args.pop('function')
    patterns = args.shift('object|string|array') || []
    options = args.pop('function') || {}

    let name = 'Clearing'
    let startAt = new Date()
    let verbose = !!options.verbose
    let prefix = options.prefix || 'coz'

    let logger = cozLogger({
      prefix,
      verbose: !!verbose
    })
    let loader = cozBudLoader({})
    let remover = cozBudRemover({})

    return co(function * () {
      logger.infoStarted(name, startAt)
      return yield new Promise((resolve, reject) => {
        eachBud(patterns, (filename, callback) => {
          async.waterfall([
            (callback) => {
              callback(null, filename)
            },
            (bud, callback) => {
              loader.load(bud)
                .then(
                  (bud) => callback(null, bud),
                  (err) => callback(err)
                )
            },
            (bud, callback) => {
              remover.remove(bud, callback)
            },
            (bud, callback) => {
              logger.logClearing(bud, callback)
            }
          ], callback)
        }, (err) => {
          logger.infoFinished(name, startAt, new Date())
          if (callback) {
            console.warn('callback is now deprecated. Use promise interface instead.')
            callback(err)
          }
          err ? reject(err) : resolve()
        })
      })
    }).catch((err) => {
      console.error(err)
      return Promise.reject(err)
    })
  }
}

module.exports = Coz

/**
 * Callback for coz render.
 * @memberof module:coz
 * @inner
 * @callback renderCallback
 * @param {?Error} error - Render error.
 */

/**
 * Callback for coz render.
 * @memberof module:coz
 * @inner
 * @callback cleanCallback
 * @param {?Error} error - Clean error.
 */
