/**
 * Create new context.
 * @memberof module:coz
 * @function create
 * @returns {object} - A new coz context.
 */

"use strict";

var Coz = require('./coz');

/** @lends create */
function create() {
    return new Coz();
}

module.exports = create;
