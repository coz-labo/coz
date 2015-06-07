/**
 * Bud instance factories.
 * @module coz/lib/bud/factory
 */

"use strict";

module.exports = {
    get indexJsBud() { return require('./index_js_bud'); },
    get nodeunitTestcaseJsBud() { return require('./nodeunit_testcase_js_bud'); }
};