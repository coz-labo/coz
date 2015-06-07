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
    /**
     * @description This is an alias for {@link module:coz/lib/bud/factory}.
     */
    get factory() { return require('./factory'); }
};