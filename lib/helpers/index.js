/**
 * Bud compile helpers.
 * These functions a exposed in template context.
 * @module planter/lib/helpers
 * @property camelcase {object} - {@link module:planter/lib/helpers.camelcase|camelcase module}.
 * @property snakecase {object} - {@link module:planter/lib/helpers.snakecase|snakecase module}.
 */

"use strict";

module.exports = {
    get camelcase() { return require('./camelcase'); },
    get snakecase() { return require('./snakecase'); }
};