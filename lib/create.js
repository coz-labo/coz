/**
 * Create new coz context.
 * This is useful when you want to extend coz module, without affecting the original.
 * {@link module:coz|coz} module it self an instance of a {@link module:coz~Coz|Coz}.
 * @memberof module:coz
 * @function create
 * @returns {module:coz~Coz} - A new coz context.
 */

"use strict";

var Coz = require('./coz');

/** @lends create */
function create() {
    return new Coz();
}

module.exports = create;
