/**
 * Utility functions for copying.
 * @module coz/lib/util/copying
 */

"use strict";

module.exports = {
    get copy() { return require('./copy'); },
    get fallbackCopy() { return require('./fallback_copy'); }
};