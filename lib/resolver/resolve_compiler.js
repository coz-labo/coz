/**
 * Resolve planter compiler.
 * @memberof module:planter/lib/resolve
 * @function resolveCompiler
 * @param {string} name - Name of compiler to resolve.
 * @returns {function|null} - Resolved compiler.
 */


"use strict";

var compilers = require('../compilers');

function _compilerByName(name) {
    if (compilers.hasOwnProperty[name]) {
        return compilers[name];
    }
    var suffix = ['_compiler', 'Compiler'];
    for (var i = 0; i < suffix.length; i++) {
        var compiler = _compilerByName(name + suffix[i]);
        if (compiler) {
            return compiler;
        }
    }
    return null;
}

/** @lends resolveCompiler */
function resolveCompiler(name) {
    switch (typeof(name)) {
        case 'function':
            return name;
        case 'string':
            var byName = _compilerByName(name);
            if (byName) {
                return byName;
            }
            try {
                return require(name);
            } catch (e) {
                return null;
            }
        default:
            return null;
    }
}

module.exports = resolveCompiler;