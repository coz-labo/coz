/**
 * Buildin tmpl modules.
 * @module coz/lib/template/buildinTmpls
 * @see module:coz/lib/template
 */

"use strict";

module.exports = {
    get indexjsTmpl() { return require('./indexjs_tmpl'); },
    get jsonTmpl() { return require('./json_tmpl'); },
    get nodeunitTestcasejsTmpl() { return require('./nodeunit_testcasejs_tmpl'); },
    get structjsTmpl() { return require('./structjs_tmpl'); },
    get textTmpl() { return require('./text_tmpl'); }
};