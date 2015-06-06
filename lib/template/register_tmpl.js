/**
 * Register tmpl.
 * @memberof leaf/lib/template
 * @function registerTmpl
 * @param {string} name - Name of tmpl.
 * @param {object} properties - Tmpl properties.
 */

"use strict";

var tmpls = require('./tmpls'),
    resolveTmpl = require('./resolve_tmpl');

/** @lends registerTmpl */
function registerTmpl(name, tmpl) {
    if (resolveTmpl(name)) {
        throw new Error('Tmpl with name already registered: ' + name);
    }
    tmpl.$name = tmpl.$name || name;
    tmpls[name] = tmpl;
}

module.exports = registerTmpl;