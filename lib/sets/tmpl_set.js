/**
 * Set of tmpls.
 * @memberof module:coz/lib/sets
 * @inner
 * @constructor TmplSet
 */

'use strict'

const buildinTmpls = require('../buildin/buildin_tmpls')

/** @lends TmplSet */
function TmplSet (tmpls) {
  this._tmpls = {};
  this.registerTmpls(buildinTmpls)
  this.registerTmpls(tmpls || {})
}

TmplSet.prototype = {
  /**
   * Register a tmpl.
   * @param {string} name - Name to register.
   * @param {function} tmpl - Template function to register.
   */
  registerTmpl (name, tmpl) {
    if (this.resolveTmpl(name)) {
      throw new Error('Tmpl with name already registered: ' + name)
    }
    this._tmpls[ name ] = tmpl
  },
  /**
   * Register multiple tmpls.
   * @param {object} tmpls - Tmpls to register.
   * @returns {TmplSet} - self.
   */
  registerTmpls (tmpls) {
    let names = Object.keys(tmpls)
    for (let i = 0, len = names.length; i < len; i++) {
      let name = names[ i ]
      this.registerTmpl(name, tmpls[ name ])
    }
    return this
  },
  /**
   * Resolve an tmpl.
   * @param {string} name - Name of tmpl.
   * @returns {function} - Resolved tmpl constructor.
   */
  resolveTmpl (name) {
    if (!name) {
      return null
    }
    let isFunction = typeof name === 'function'
    if (isFunction) {
      return name
    }
    return this._tmpls[ name ] || null
  }
}

module.exports = TmplSet
