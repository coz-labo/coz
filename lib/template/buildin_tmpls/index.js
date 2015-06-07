/**
 * Predefined template modules.
 * @module coz/lib/template/tmpls
 */

"use strict";

module.exports = {
    get indexjsTmpl() { return require('./indexjs_tmpl'); },
    get jsonTmpl() { return require('./json_tmpl'); },
    get nodeunitTestcasejsTmpl() { return require('./nodeunit_testcasejs_tmpl'); },
    get textTmpl() { return require('./text_tmpl'); }
};