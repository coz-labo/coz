/**
 * Utility functions for copying.
 * @module leaf/lib/util/copying
 * @property copy {object} - {@link module:leaf/lib/util/copying.copy|copy module}.
 * @property fallbackCopy {object} - {@link module:leaf/lib/util/copying.fallbackCopy|fallbackCopy module}.
 */

"use strict";

module.exports = {
    get copy() { return require('./copy'); },
    get fallbackCopy() { return require('./fallback_copy'); }
};