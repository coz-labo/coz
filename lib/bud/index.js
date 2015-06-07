/**
 * This module provides interfaces working with bud.
 * @module coz/lib/bud
 */

"use strict";

module.exports = {
    get BudCompiler() { return require('./bud_compiler'); },
    get BudLoader() { return require('./bud_loader'); },
    get BudLogger() { return require('./bud_logger'); },
    get BudWriter() { return require('./bud_writer'); },
    get Bud() { return require('./bud'); },
    get factory() { return require('./factory'); },
    get foo() { return require('./foo'); }
};