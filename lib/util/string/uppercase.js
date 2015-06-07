/**
 * Convert string into upper case.
 * @memberof module:coz/lib/string
 * @function uppercase
 * @param {string} str - String to convert.
 * @returns {string} str - Upper case string.
 */

"use strict";

/** @lends uppercase */
function uppercase(str) {
    str = String(str);
    if (!str) {
        return str;
    }
    return str.toUpperCase();
}

module.exports = uppercase;