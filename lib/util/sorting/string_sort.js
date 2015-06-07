/**
 * Sort string.
 * @memberof module:coz/lib/util/sorting
 * @function stringSort
 * @param {object} options - Sort options.
 * @param {boolean} [options.desc=false] - Desc sort.
 * @returns {function} - Compare function.
 */

"use strict";

/** @lends stringSort */
function stringSort(options) {
    if (arguments.length > 1) {
        throw new Error('[stringSort] Invalid args.');
    }
    options = options || {};
    var desc = !!options.desc;
    return function (a, b) {
        var compared = a.localeCompare(b);
        return compared * (desc ? -1 : 1);
    }
}

module.exports = stringSort;