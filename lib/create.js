/**
 * Create new context.
 * @memberof module:leaf
 * @function create
 * @returns {object} - A new leaf context.
 */

"use strict";

var Leaf = require('./leaf');

/** @lends create */
function create() {
    return new Leaf();
}

module.exports = create;
