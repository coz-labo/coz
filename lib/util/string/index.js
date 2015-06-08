/**
 * String manipulate functions.
 * @module coz/lib/util/string
 * @see module:coz/lib/util
 */

"use strict";

module.exports = {
    get camelcase() { return require('./camelcase'); },
    get capitalcase() { return require('./capitalcase'); },
    get lowercase() { return require('./lowercase'); },
    get pascalcase() { return require('./pascalcase'); },
    get sentencecase() { return require('./sentencecase'); },
    get snakecase() { return require('./snakecase'); },
    get spinalcase() { return require('./spinalcase'); },
    get uppercase() { return require('./uppercase'); }
};