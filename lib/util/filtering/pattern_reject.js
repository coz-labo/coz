/**
 * Create a filter function to reject values matches a pattern.
 * @memberof module:coz/lib/util/filtering
 * @function patternReject
 * @param {string|RegExp} pattern - Pattern to reject.
 * @returns {function} - Filter function to reject the pattern.
 */

"use strict";

/** @lends patternReject */
function patternReject(pattern) {
    if (arguments.length > 1) {
        throw new Error('[patternReject]Invalid args.');
    }
    return function (key) {
        return !String(key).match(pattern);
    };
}

module.exports = patternReject;