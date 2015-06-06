/**
 * Resolve an engine.
 * @memberof leaf/lib/template
 * @function resolveEngine
 * @param {string} name - Name of engine.
 * @returns {function} - Resolved engine constructor.
 */


"use strict";

var engines = require('./engines'),
    _approximatelyEqual = require('./_approximately_equal');


/** @lends resolveEngine */
function resolveEngine(name) {
    if (!name) {
        return null;
    }
    var isFunction = typeof(name) === 'function';
    if (isFunction) {
        return name;
    }
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
}

module.exports = resolveEngine;