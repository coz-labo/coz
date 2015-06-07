/**
 * This module provides interfaces working with bud.
 * @module coz/lib/bud
 */

"use strict";

module.exports = {
    /**
     * @see {@link module:coz/lib/bud~BudCompiler}
     */
    get BudCompiler() { return require('./bud_compiler'); },
    /**
     * @see {@link module:coz/lib/bud~BudLoader}
     */
    get BudLoader() { return require('./bud_loader'); },
    /**
     * @see {@link module:coz/lib/bud~BudLogger}
     */
    get BudLogger() { return require('./bud_logger'); },
    /**
     * @see {@link module:coz/lib/bud~BudWriter}
     */
    get BudWriter() { return require('./bud_writer'); },
    /**
     * @see {@link module:coz/lib/bud~Bud}
     */
    get Bud() { return require('./bud'); },
    /**
      * @see {@link module:coz/lib/bud/factory}
      */
    get factory() { return require('./factory'); }
};