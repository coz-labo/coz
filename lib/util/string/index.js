/**
 * String manipulate functions.
 * @module leaf/lib/util/string
 * @property camelcase {object} - {@link module:leaf/lib/util/string.camelcase|camelcase module}.
 * @property lowercase {object} - {@link module:leaf/lib/util/string.lowercase|lowercase module}.
 * @property pascalcase {object} - {@link module:leaf/lib/util/string.pascalcase|pascalcase module}.
 * @property sentencecase {object} - {@link module:leaf/lib/util/string.sentencecase|sentencecase module}.
 * @property snakecase {object} - {@link module:leaf/lib/util/string.snakecase|snakecase module}.
 * @property spinalcase {object} - {@link module:leaf/lib/util/string.spinalcase|spinalcase module}.
 * @property uppercase {object} - {@link module:leaf/lib/util/string.uppercase|uppercase module}.
 */

"use strict";

module.exports = {
    get camelcase() { return require('./camelcase'); },
    get lowercase() { return require('./lowercase'); },
    get pascalcase() { return require('./pascalcase'); },
    get sentencecase() { return require('./sentencecase'); },
    get snakecase() { return require('./snakecase'); },
    get spinalcase() { return require('./spinalcase'); },
    get uppercase() { return require('./uppercase'); }
};