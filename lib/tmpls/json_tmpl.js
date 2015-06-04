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

/**
 * Name of this template.
 * @type {string}
 * @lends jsonTmpl.name
 */
jsonTmpl.name = 'json';

module.exports = jsonTmpl;