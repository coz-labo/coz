/**
 * Array filtering functions.
 * @module coz/lib/util/filtering
 * @property emptyReject {object} - {@link coz/lib/util/filtering.emptyReject|emptyReject module}.
 * @property patternReject {object} - {@link coz/lib/util/filtering.patternReject|patternReject module}.
 */

"use strict";

module.exports = {
    get emptyReject() { return require('./empty_reject'); },
    get patternReject() { return require('./pattern_reject'); }
};