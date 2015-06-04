/**
 * Create new context.
 * @memberof module:planter
 * @function create
 * @returns {object} - A new planter context.
 */

"use strict";

var Planter = require('./planter');

/** @lends create */
function create() {
    return new Planter();
}

module.exports = create;
