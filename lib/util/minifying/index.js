/**
 * Utility functions for minify source code.
 * @module coz/lib/util/minifying
 * @property minifyJavascript {object} - {@link coz/lib/util/minifying.minifyJavascript|minifyJavascript module}.
 */

"use strict";

module.exports = {
    get minifyJavascript() { return require('./minify_javascript'); }
};