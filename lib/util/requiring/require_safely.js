/**
 * Require a module if possible.
 * @memberof module:coz/lib/util/requiring
 * @function requireSafely
 * @param {string} name - Name to require
 */

"use strict";

var core = require('../../core'),
    path = core.path;

/** @lends requireSafely */
function requireSafely(name) {
    var requirable = !!name && (typeof(name) === 'string');
    if (!requirable) {
        return null;
    }
    try {
        require.resolve(name);
        return require(name);
    } catch (e) {
        var resolved = path.resolve(name);
        if (resolved !== name) {
            return requireSafely(resolved);
        } else {
            return null;
        }
    }
}

module.exports = requireSafely;
