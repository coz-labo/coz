/**
 * Template for json.
 * @memberof module:planter/lib/util/tmpls
 * @function jsonTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

/** @lends jsonTmpl */
function jsonTmpl(data) {
    return JSON.stringify(data, null, 4);
}

module.exports = jsonTmpl;