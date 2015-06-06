/**
 * Bud instance factories.
 * @module leaf/lib/factory
 * @property indexJsBud {object} - {@link leaf/lib/factory.indexJsBud|indexJsBud module}.
 */

"use strict";

module.exports = {
    get indexJsBud() { return require('./index_js_bud'); }
};