/**
 * Template for text.
 * @memberof module:leaf/lib/util/tmpls
 * @function textTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

/** @lends textTmpl */
function textTmpl(data) {
    return String(data);
}

module.exports = textTmpl;