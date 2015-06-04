/**
 * Template for text.
 * @memberof module:planter/lib/util/tmpls
 * @function textTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

/** @lends textTmpl */
function textTmpl(data) {
    return data;
}

/**
 * Name of this template.
 * @type {string}
 * @lends textTmpl.name
 */
textTmpl.name = 'text';

module.exports = textTmpl;