/**
 * Utility modules.
 * @module coz/lib/util
 */

"use strict";

module.exports = {
    get compiling() { return require('./compiling'); },
    get copying() { return require('./copying'); },
    get file() { return require('./file'); },
    get filtering() { return require('./filtering'); },
    get logging() { return require('./logging'); },
    get minifying() { return require('./minifying'); },
    get sorting() { return require('./sorting'); },
    get string() { return require('./string'); }
};