/**
 * Convert string into snake case.
 * @memberof module:planter/lib/string
 * @function snakecase
 * @param {string} str - String to convert.
 * @returns {string} str - Snake cased string.
 */

"use strict";

var replacing = {
    from: /([A-Z])/g,
    to: function ($1) {
        return "_" + $1.toLowerCase();
    }
};

/** @lends snakecase */
function snakecase(str) {
    str = String(str).replace(/[\-\.]/, '_');
    if (!str) {
        return str;
    }
    return str.replace(replacing.from, replacing.to);
}

module.exports = snakecase;
