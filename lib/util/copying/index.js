/**
 * Utility functions for copying.
 * @module leaf/lib/util/copying
 */

"use strict";

module.exports = {
    get copy() { return require('./copy'); },
    get fallbackCopy() { return require('./fallback_copy'); }
};