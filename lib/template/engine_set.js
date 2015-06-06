/**
 * Set of engines
 * @memberof leaf/lib/template
 * @constructor EngineSet
 */

"use strict";

var buildinEngines = require('./buildin_engines'),
    Engine = require('./engine'),
    copying = require('../util/copying'),
    _approximatelyEqual = require('./_approximately_equal');

/** @lends EngineSet */
function EngineSet() {
    var s = this;
    s._engines = {};
    s.registerEngines(buildinEngines);
}

EngineSet.prototype = {
    /**
     * Register an engine.
     * @memberof leaf/lib/template
     * @function registerEngine
     * @param {string} name - Name of engine.
     * @param {object} engine - Engine object.
     * @param {string[]} [engine.$aliases] - Alias names of engine.
     * @param {!function} engine.compile - Compile function.
     * @returns {EngineSet} - self.
     */
    registerEngine: function (name, engine) {
        var s = this;
        if (s.resolveEngine(name)) {
            throw new Error('Engine with name already registered: ' + name);
        }
        engine = EngineSet._newEngineNamed(engine, name);
        s._engines[name] = engine;
        return s;
    },
    /**
     * Register multiple engines.
     * @param {object} engines - Engines.
     * @returns {EngineSet} - self.
     */
    registerEngines: function (engines) {
        var s = this;
        var names = Object.keys(engines);
        for (var i = 0, len = names.length; i < len; i++) {
            var name = names[i];
            s.registerEngine(name, engines[name]);
        }
        return s;
    },
    /**
     * Resolve an engine.
     * @param {string} name - Name to resolve.
     * @returns {function} - Resolved engine constructor.
     */
    resolveEngine: function (name) {
        if (!name) {
            return null;
        }
        var s = this;
        var engines = s._engines;
        var keys = Object.keys(engines);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i], engine = engines[key];
            if (key === name) {
                return engine;
            }
            var hitByName = _approximatelyEqual(engine.$name, name);
            if (hitByName) {
                return engine;
            }
            var aliases = engine.$aliases || [];
            for (var j = 0; j < aliases.length; j++) {
                var hitByAlias = _approximatelyEqual(aliases[j], name);
                if (hitByAlias) {
                    return engine;
                }
            }
        }
        return null;
    },
    /**
     * @type {object}
     */
    _engines: undefined
};

EngineSet._newEngineNamed = function (properties, name) {
    if (properties.$isEngine) {
        return properties;
    }
    properties = copying.copy(properties);
    properties.$name = properties.$name || name;
    return Engine.define(properties);
};

module.exports = EngineSet;