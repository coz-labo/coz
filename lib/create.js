/**
 * Create new context.
 * {@link module:coz|coz} module it self an instance of a {@link module:coz.Coz|Coz}.
 * @memberof module:coz
 * @function create
 * @returns {module:coz.Coz} - A new coz context.
 */

"use strict";

var Coz = require('./coz');

/** @lends create */
function create() {
    return new Coz();
}

module.exports = create;
