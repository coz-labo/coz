/**
 * Build in helpers. Provide functions exposed into template context.
 * @module leaf/lib/template/helpers
 */

"use strict";

module.exports = {
    get HandlebarsHelper() { return require('./handlebars_helper'); },
    get Helper() { return require('./helper'); }
};