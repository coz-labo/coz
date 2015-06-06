/**
 * Convert string into capital case.
 * First letters will be uppercase.
 * @memberof module:kyo/lib/string
 * @function capitalcase
 * @param {string} str - String to convert.
 * @returns {string} str - Capital case string.
 */

"use strict";

var uppercase = require('./uppercase');


/** @lends capitalcase */
function capitalcase(str) {
    str = String(str);
    if (!str) {
        return str;
    }
    return uppercase(str[0]) + str.slice(1);
}

module.exports = capitalcase;