/**
 * Bud instance factories.
 * @module kyo/lib/factory
 * @property indexJsBud {object} - {@link kyo/lib/factory.indexJsBud|indexJsBud module}.
 */

"use strict";

module.exports = {
    get indexJsBud() { return require('./index_js_bud'); }
};