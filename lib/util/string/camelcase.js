/**
 * Convert string into camel case.
 * @memberof module:planter/lib/string
 * @function camelcase
 * @param {string} str - String to convert.
 * @returns {string} str - Camel cased string.
 */

"use strict";


var replace = {
    from: /[\-_\.]([a-z])/g,
    to: function (a, b) {
        return b.toUpperCase();
    }
};

/** @lends camelcase */
function camelcase(str) {
    str = String(str).replace(/^[\-_\.]/, '');
    if (!str) {
        return str;
    }
    return str[0].toLowerCase() + str.replace(replace.from, replace.to).slice(1);
}

module.exports = camelcase;
