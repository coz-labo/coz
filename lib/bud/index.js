/**
 * This module provides interfaces working with bud.
 * @module coz/lib/bud
 * @see module:coz/lib
 */

"use strict";

module.exports = {
    /**
     * @memberof module:coz/lib/bud
     * @name {@link module:coz/lib/bud~BudCompiler|BudCompiler}
     */
    get BudCompiler() { return require('./bud_compiler'); },
    /**
     * @memberof module:coz/lib/bud
     * @name {@link module:coz/lib/bud~BudLoader|BudLoader}
     */
    get BudLoader() { return require('./bud_loader'); },
    /**
     * @memberof module:coz/lib/bud
     * @name {@link module:coz/lib/bud~BudRemover|BudRemover}
     */
    get BudRemover() { return require('./bud_remover'); },
    /**
     * @memberof module:coz/lib/bud
     * @name {@link module:coz/lib/bud~BudWriter|BudWriter}
     */
    get BudWriter() { return require('./bud_writer'); },
    /**
     * @memberof module:coz/lib/bud
     * @name {@link module:coz/lib/bud~Bud|Bud}
     */
    get Bud() { return require('./bud'); }
};