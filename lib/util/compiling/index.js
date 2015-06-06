/**
 * Utility functions for compile source code.
 * @module leaf/lib/util/compiling
 * @property compileHandlebars {object} - {@link module:leaf/lib/util/compiling.compileHandlebars|compileHandlebars module}.
 * @property precompileHandlebars {object} - {@link module:leaf/lib/util/compiling.precompileHandlebars|precompileHandlebars module}.
 */

"use strict";

module.exports = {
    get compileHandlebars() { return require('./compile_handlebars'); },
    get precompileHandlebars() { return require('./precompile_handlebars'); }
};