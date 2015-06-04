/**
 * Resolve planter tmpl.
 * @memberof module:planter/lib/resolve
 * @function resolveTmpl
 * @param {string} tmpl - Name of compiler to resolve.
 * @returns {function|null} - Resolved compiler.
 */


"use strict";

/** @lends resolveTmpl */
function resolveTmpl(name) {
    switch (typeof(name)) {
        case 'function':
            return name;
    }
}

module.exports = resolveTmpl;