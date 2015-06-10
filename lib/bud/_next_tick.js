/**
 * Callback on next tick.
 * @memberof coz/lib/bud
 * @function _nextTick
 * @param {*} val - Value to callback
 * @param {function} callback - Callback to be called on next tick.
 * @private
 */

"use strict";

/** @lends _nextTick */
function _nextTick(val, callback) {
    process.nextTick(function () {
        callback(null, val);
    });
}

module.exports = _nextTick;

