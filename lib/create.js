/**
 * Create new coz context.
 * This is useful when you want to extend coz module, without affecting the original.
 * {@link module:coz|coz} module it self an instance of a {@link module:coz~Coz|Coz}.
 * @memberof module:coz
 * @function create
 * @param {object} [config] - Coz configuration.
 * @returns {module:coz~Coz} - A new coz context.
 */

'use strict'

const Coz = require('./coz')

/** @lends create */
function create (config) {
  return new Coz(config)
}

module.exports = create
