/**
 * Template for json.
 * @memberof module:coz/lib/util/tmpls
 * @function jsonTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

/** @lends jsonTmpl */
function jsonTmpl(data) {
    return JSON.stringify(data, null, 4);
}

jsonTmpl.$name = 'json';
jsonTmpl.$aliases = [
    'jsn',
    'jsonTmpl'
];

module.exports = jsonTmpl;