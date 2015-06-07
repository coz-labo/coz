/**
 * Array filtering functions.
 * @module coz/lib/util/filtering
 */

"use strict";

module.exports = {
    get emptyReject() { return require('./empty_reject'); },
    get patternReject() { return require('./pattern_reject'); }
};