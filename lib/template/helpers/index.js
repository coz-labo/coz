/**
 * Build in helpers. Provide functions exposed into template context.
 * @module leaf/lib/template/helpers
 */

"use strict";

module.exports = {
    get handlebarsHelper() { return require('./handlebars_helper'); },
    get helper() { return require('./helper'); }
};