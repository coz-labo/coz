/**
 * Utility functions for minify source code.
 * @module leaf/lib/util/minifying
 * @property minifyJavascript {object} - {@link leaf/lib/util/minifying.minifyJavascript|minifyJavascript module}.
 */

"use strict";

module.exports = {
    get minifyJavascript() { return require('./minify_javascript'); }
};