/**
 * This module provides interfaces working with bud.
 * @module leaf/lib/bud
 */

"use strict";

module.exports = {
    get budCompiler() { return require('./bud_compiler'); },
    get budLoader() { return require('./bud_loader'); },
    get bud() { return require('./bud'); }
};