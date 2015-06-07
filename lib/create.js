/**
 * Create new context.
 * @memberof module:coz
 * @function create
 * @returns {object} - A new coz context.
 */

"use strict";

var Kyo = require('./coz');

/** @lends create */
function create() {
    return new Kyo();
}

module.exports = create;
