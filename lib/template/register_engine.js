/**
 * Register engine.
 * @memberof leaf/lib/template
 * @function registerEngine
 * @param {string} name - Name of engine.
 * @param {object} properties - Engine properties.
 */

"use strict";

var engines = require('./engines'),
    Engine = engines.Engine,
    resolveEngine = require('./resolve_engine');

/** @lends registerEngine */
function registerEngine(name, properties) {
    if (resolveEngine(name)) {
        throw new Error('Engine with name already registered: ' + name);
    }
    properties.$name = properties.$name || name;
    engines[name] = new Engine(properties);
}

module.exports = registerEngine;