/**
 * Bud instance factories.
 * @module planter/lib/factory
 * @property indexJsBud {object} - {@link module:planter/lib/factory.indexJsBud|indexJsBud module}.
 */

"use strict";

module.exports = {
    get indexJsBud() { return require('./index_js_bud'); }
};