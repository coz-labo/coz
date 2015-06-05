/**
 * String manipulate functions.
 * @module leaf/lib/util/string
 * @property camelcase {object} - {@link module:leaf/lib/util/string.camelcase|camelcase module}.
 * @property snakecase {object} - {@link module:leaf/lib/util/string.snakecase|snakecase module}.
 */

"use strict";

module.exports = {
    get camelcase() { return require('./camelcase'); },
    get snakecase() { return require('./snakecase'); }
};