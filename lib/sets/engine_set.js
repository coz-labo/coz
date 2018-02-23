/**
 * Set of engines
 * @memberof module:coz/lib/sets/
 * @inner
 * @constructor EngineSet
 * @param {object} [engines] - Engines to register.
 */

'use strict'

const buildinEngines = require('../buildin/buildin_engines')
const cozEngine = require('coz-engine')

/** @lends EngineSet */
function EngineSet (engines) {
  this._engines = {}
  this.registerEngines(buildinEngines)
  this.registerEngines(engines || {})
}

EngineSet.prototype = {
  /**
   * Register an engine.
   * @param {string} name - Name of engine.
   * @param {object} engine - Engine object.
   * @param {!function} engine.compile - Compile function.
   * @returns {EngineSet} - self.
   */
  registerEngine (name, engine) {
    if (this.resolveEngine(name)) {
      throw new Error('Engine with name already registered: ' + name)
    }
    engine = EngineSet._newEngine(engine, name)
    this._engines[ name ] = engine;
    return this
  },
  /**
   * Register multiple engines.
   * @param {object} engines - Engines to register.
   * @returns {EngineSet} - self.
   */
  registerEngines (engines) {
    let names = Object.keys(engines)
    for (let i = 0, len = names.length; i < len; i++) {
      let name = names[ i ];
      this.registerEngine(name, engines[ name ])
    }
    return this
  },
  /**
   * Resolve an engine.
   * @param {string} name - Name to resolve.
   * @returns {function} - Resolved engine constructor.
   */
  resolveEngine (name) {
    if (!name) {
      return null
    }
    return this._engines[ name ] || null;
  },
  /**
   * @type {object}
   */
  _engines: undefined
};

EngineSet._newEngine = function (properties) {
  if (properties.$isEngine) {
    return properties
  }
  switch (typeof properties) {
    case 'string':
    case 'boolean':
    case 'number':
      throw new Error('Invalid engined:' + String(properties))
  }
  properties = Object.assign({}, properties)
  return cozEngine(properties)
}

module.exports = EngineSet
