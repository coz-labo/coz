/**
 * Template for text.
 * @memberof module:kyo/lib/util/tmpls
 * @function textTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

/** @lends textTmpl */
function textTmpl(data) {
    return String(data);
}
textTmpl.$name = 'text';
textTmpl.$aliases = [
    'txt',
    'textTmpl'
];

module.exports = textTmpl;