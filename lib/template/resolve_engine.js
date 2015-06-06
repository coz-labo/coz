/**
 * Resolve an engine.
 * @memberof leaf/lib/template
 * @function resolveEngine
 * @param {string} name - Name of engine.
 * @returns {function} - Resolved engine constructor.
 */


"use strict";

var engines = require('./engines'),
    string = require('../util/string');

function _get(name, suffix) {
    name = string.pascalcase(name);
    if (suffix) {
        name += suffix;
    }
    return engines[name];
}

/** @lends resolveEngine */
function resolveEngine(name) {
    var isFunction = typeof(name) === 'function';
    if (isFunction) {
        return name;
    }
    var byName = _get(name);
    if (byName) {
        return byName;
    }
    var withSuffix = _get(name, 'Engine');
    if (withSuffix) {
        return withSuffix;
    }
    throw new Error('Engine not found with name:' + name);
}

module.exports = resolveEngine;