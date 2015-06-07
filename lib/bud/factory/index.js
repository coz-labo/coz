/**
 * Bud instance factories.
 * @module coz/lib/bud/factory
 * @property indexJsBud {object} - {@link coz/lib/bud/factory.indexJsBud|indexJsBud module}.
 * @property nodeunitTestcaseJsBud {object} - {@link coz/lib/bud/factory.nodeunitTestcaseJsBud|nodeunitTestcaseJsBud module}.
 */

"use strict";

module.exports = {
    get indexJsBud() { return require('./index_js_bud'); },
    get nodeunitTestcaseJsBud() { return require('./nodeunit_testcase_js_bud'); }
};