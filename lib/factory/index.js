/**
 * Bud instance factories.
 * @module coz/lib/factory
 * @property indexJsBud {object} - {@link coz/lib/factory.indexJsBud|indexJsBud module}.
 */

"use strict";

module.exports = {
    get indexJsBud() { return require('./index_js_bud'); }
};