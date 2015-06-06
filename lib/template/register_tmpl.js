/**
 * Register tmpl.
 * @memberof leaf/lib/template
 * @function registerTmpl
 * @param {string} name - Name of tmpl.
 * @param {object} properties - Tmpl properties.
 */

"use strict";

var buildinTmpls = require('./buildin_tmpls'),
    resolveTmpl = require('./resolve_tmpl');

/** @lends registerTmpl */
function registerTmpl(name, tmpl) {
    if (resolveTmpl(name)) {
        throw new Error('Tmpl with name already registered: ' + name);
    }
    tmpl.$name = tmpl.$name || name;
    buildinTmpls[name] = tmpl;
}

module.exports = registerTmpl;