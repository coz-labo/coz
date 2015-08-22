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
    get eachBud() { return require('./each_bud'); }
};