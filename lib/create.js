/**
 * Create new context.
 * @memberof module:kyo
 * @function create
 * @returns {object} - A new kyo context.
 */

"use strict";

var Kyo = require('./kyo');

/** @lends create */
function create() {
    return new Kyo();
}

module.exports = create;
