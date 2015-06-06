/**
 * Predefined template modules.
 * @module leaf/lib/template/tmpls
 */

"use strict";

module.exports = {
    get indexjsTmpl() { return require('./indexjs_tmpl'); },
    get jsonTmpl() { return require('./json_tmpl'); },
    get textTmpl() { return require('./text_tmpl'); }
};