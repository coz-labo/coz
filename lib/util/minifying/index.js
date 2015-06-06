/**
 * Utility functions for minify source code.
 * @module kyo/lib/util/minifying
 * @property minifyJavascript {object} - {@link kyo/lib/util/minifying.minifyJavascript|minifyJavascript module}.
 */

"use strict";

module.exports = {
    get minifyJavascript() { return require('./minify_javascript'); }
};