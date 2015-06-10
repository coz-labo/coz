/**
 * Do some task with timeout.
 * @memberof module:coz/lib/bud
 * @function _asyncWithTimeout
 * @param {function} task - An async task.
 * @param {number} timeout - Timeout duration.
 * @param {function} callback - Callback when done.
 * @private
 */

"use strict";

/** @lends _asyncWithTimeout */
function _asyncWithTimeout(task, timeout, callback) {
    var timer = setTimeout(function () {
        if (callback) {
            var error = new Error('Operation timeout.');
            error.$isTimeout = true;
            callback(error);
            callback = null;
        }
    }, timeout);
    task(function () {
        if (callback) {
            callback.apply(this, arguments);
            callback = null;
        }
    });
    timer.unref();

}

module.exports = _asyncWithTimeout;