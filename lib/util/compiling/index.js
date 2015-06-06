/**
 * Utility functions for compile source code.
 * @module leaf/lib/util/compiling
 */

"use strict";

module.exports = {
    get compileHandlebars() { return require('./compile_handlebars'); },
    get precompileHandlebars() { return require('./precompile_handlebars'); }
};