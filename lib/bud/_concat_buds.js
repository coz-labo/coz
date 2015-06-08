/**
 * Concat multiple buds.
 * @function _concatBuds
 * @param {module:ciz/lib/bud~Bud} bud
 * @param {function} iterator - Concat iterator.
 * @param {function} callback - Callback when done.
 * @private
 */

"use strict";

var core = require('../core'),
    ext = require('../ext'),
    async = ext.async;

/** @lends _concatBuds */
function _concatBuds(values, handler, callback) {
    async.concatSeries([].concat(values), handler, callback);
}

module.exports = _concatBuds;