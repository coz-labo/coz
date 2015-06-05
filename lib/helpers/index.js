/**
 * Bud compile helpers.
 * These functions a exposed in template context.
 * @module leaf/lib/helpers
 * @property camelcase {object} - {@link module:leaf/lib/helpers.camelcase|camelcase module}.
 * @property snakecase {object} - {@link module:leaf/lib/helpers.snakecase|snakecase module}.
 */

"use strict";

module.exports = {
    get camelcase() { return require('./camelcase'); },
    get snakecase() { return require('./snakecase'); }
};