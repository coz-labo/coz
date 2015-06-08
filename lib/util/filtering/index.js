/**
 * Array filtering functions.
 * @module coz/lib/util/filtering
 * @see module:coz/lib/util
 */

"use strict";

module.exports = {
    get emptyReject() { return require('./empty_reject'); },
    get patternReject() { return require('./pattern_reject'); }
};