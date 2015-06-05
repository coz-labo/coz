/**
 * Array sorting functions.
 * @module leaf/lib/util/sorting
 * @property stringSort {object} - {@link module:leaf/lib/util/sorting.stringSort|stringSort module}.
 */

"use strict";

module.exports = {
    get stringSort() { return require('./string_sort'); }
};