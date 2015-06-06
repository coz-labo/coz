/**
 * Resolve an tmpl.
 * @memberof leaf/lib/template
 * @function resolveTmpl
 * @param {string} name - Name of tmpl.
 * @returns {function} - Resolved tmpl constructor.
 */


"use strict";

var tmpls = require('./tmpls'),
    string = require('../util/string');

function _get(name, suffix) {
    name = string.camelcase(name);
    if (suffix) {
        name += suffix;
    }
    return tmpls[name];
}

/** @lends resolveTmpl */
function resolveTmpl(name) {
    var isFunction = typeof(name) === 'function';
    if (isFunction) {
        return name;
    }
    var byName = _get(name);
    if (byName) {
        return byName;
    }
    var withSuffix = _get(name, 'Tmpl');
    if (withSuffix) {
        return withSuffix;
    }
    return null;
}

module.exports = resolveTmpl;