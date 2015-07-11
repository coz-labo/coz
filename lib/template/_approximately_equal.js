/**
 * Compare string and detect approximately equal or not.
 * @memberof coz/lib/template
 * @function _approximatelyEqual
 * @param {string} value1 - Value to compare.
 * @param {string} value2 - Value to compare.
 * @returns {boolean} - Equals or not.
 * @private
 */

"use strict";

var ext = require('../ext'),
    string = ext.stringcase;

var converters = [
    string.camelcase,
    string.pascalcase,
    string.snakecase,
    string.lowercase
];

/** @lends _approximatelyEqual */
function _approximatelyEqual(value1, value2) {
    for (var i = 0, len = converters.length; i < len; i++) {
        var converter = converters[i];
        var hit = converter(value1) === converter(value2);
        if (hit) {
            return true;
        }
    }
    return false;
}


module.exports = _approximatelyEqual;