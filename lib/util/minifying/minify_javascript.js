/**
 * Minify javascript source.
 * @memberof kyo/lib/util/minifying
 * @function minifyJavascript
 * @param {string} source - Javascript source string.
 * @param {object] options - Optional settings.
 * @returns {string} - Minified string.
 */

"use strict";


var ext = require('../../ext'),
    uglifyJs = ext.uglifyJs;

/** @lends minifyJavascript */
function minifyJavascript(source, options) {
    if (!source) {
        return null;
    }
    options = options || {};
    return uglifyJs.minify(source, {
        fromString: true
    }).code;
}


module.exports = minifyJavascript;