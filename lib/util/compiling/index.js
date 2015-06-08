/**
 * Utility functions for compile source code.
 * @module coz/lib/util/compiling
 * @see module:coz/lib/util
 */

"use strict";

module.exports = {
    get compileHandlebars() { return require('./compile_handlebars'); },
    get precompileHandlebars() { return require('./precompile_handlebars'); }
};