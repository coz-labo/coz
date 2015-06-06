/**
 * This module provides interfaces working with bud.
 * @module leaf/lib/bud
 */

"use strict";

module.exports = {
    get BudCompiler() { return require('./bud_compiler'); },
    get BudLoader() { return require('./bud_loader'); },
    get BudWriter() { return require('./bud_writer'); },
    get Bud() { return require('./bud'); }
};