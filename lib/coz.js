/**
 * Coz context.
 * @memberof module:coz
 * @inner
 * @constructor Coz
 * @param {object} [config] - Coz configuration.
 */

'use strict'
const argx = require('argx')
const resolve = require('./resolve')
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
   */
  render (patterns, options = {}) {
    const s = this
    let args = argx(arguments)
    if (args.pop('function')) {
      throw new Error('Callback is no longer supported. Use promise interface instead.')
    }

    let name = 'Rendering'
    let startAt = new Date()
    let verbose = !!options.verbose

    let logger = cozLogger({
      verbose: !!verbose
    })
    let loader = cozBudLoader({})
    let compiler = cozBudCompiler({
      resolveEngine: s.engineSet.resolveEngine.bind(s.engineSet),
      resolveTmpl: s.tmplSet.resolveTmpl.bind(s.tmplSet)
    })
    let writer = cozBudWriter({})
    return co(function * () {
      try {
        logger.infoStarted(name, startAt)
        let buds = yield resolve(patterns)
        for (let bud of buds) {
          bud = yield loader.load(bud)
          // TODO Use promise itnerface
          bud = yield new Promise((resolve, reject) =>
            compiler.compile(bud, (err, bud) => err ? reject(err) : resolve(bud))
          )
          bud = yield writer.write(bud)
          logger.logRendering(bud, () => {})
        }
        logger.infoFinished(name, startAt, new Date())
      } catch (err) {
        console.error(err)
        throw err
      }
    })
  },
  /**
   * Clean files from bud.
   * @param {string|string[]} patterns - Bud file names.
   * @param {object} [options] - Optional settings.
   * @param {boolean} [options.verbose=false] - Log verbose.
   */
  clean (patterns, options = {}) {
    const s = this
    let args = argx(arguments)
    /** @deprecated */
    if (args.pop('function')) {
      throw new Error('Callback is no longer supported. Use promise interface instead.')
    }
    let name = 'Clearing'
    let startAt = new Date()
    let verbose = !!options.verbose

    let logger = cozLogger({
      verbose: !!verbose
    })
    let loader = cozBudLoader({})
    let remover = cozBudRemover({})

    return co(function * () {
      try {
        logger.infoStarted(name, startAt)
        let buds = yield resolve(patterns)
        for (let bud of buds) {
          bud = yield loader.load(bud)
          bud = yield new Promise((resolve, reject) =>
            remover.remove(bud, (err, bud) => err ? reject(err) : resolve(bud))
          )
          logger.logClearing(bud, () => {})
        }
        logger.infoFinished(name, startAt, new Date())
      } catch (err) {
        console.error(err)
        throw err
      }
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
