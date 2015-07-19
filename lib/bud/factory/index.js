/**
 * Bud instance factories.
 * @module coz/lib/bud/factory
 * @see module:coz/lib/bud
 */

"use strict";

module.exports = {
    get indexJsBud() { return require('./index_js_bud'); },
    get nodeunitTestcaseJsBud() { return require('./nodeunit_testcase_js_bud'); },
    get structJsBud() { return require('./struct_js_bud'); }
};