/**
 * Resolve an tmpl.
 * @memberof leaf/lib/template
 * @function resolveTmpl
 * @param {string} name - Name of tmpl.
 * @returns {function} - Resolved tmpl constructor.
 */


"use strict";

var buildinTmpls = require('./buildin_tmpls'),
    _approximatelyEqual = require('./_approximately_equal');


/** @lends resolveTmpl */
function resolveTmpl(name) {
    if (!name) {
        return null;
    }
    var isFunction = typeof(name) === 'function';
    if (isFunction) {
        return name;
    }
    var keys = Object.keys(buildinTmpls);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i], tmpl = buildinTmpls[key];
        if (key === name) {
            return tmpl;
        }
        var hitByName = _approximatelyEqual(tmpl.$name, name);
        if (hitByName) {
            return tmpl;
        }
        var aliases = tmpl.$aliases || [];
        for (var j = 0; j < aliases.length; j++) {
            var hitByAlias = _approximatelyEqual(aliases[j], name);
            if (hitByAlias) {
                return tmpl;
            }
        }
    }
    return null;
}

module.exports = resolveTmpl;