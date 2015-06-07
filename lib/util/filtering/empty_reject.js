/**
 * Create a filter function to reject empty.
 * @memberof module:coz/lib/util/filtering
 * @function emptyReject
 * @returns {function} - Filter function to reject the empty.
 */

"use strict";

/** @lends emptyReject */
function emptyReject() {
    if (arguments.length > 1) {
        throw new Error('[emptyReject]Invalid args.');
    }
    return function (value) {
        return (value !== null) && (typeof(value) !== 'undefined') && (value !== '');
    };
}

module.exports = emptyReject;