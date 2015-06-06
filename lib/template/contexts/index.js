/**
 * Build in helpers. Provide functions exposed into template context.
 * @module leaf/lib/template/helpers
 */

"use strict";

module.exports = {
    get Context() { return require('./context'); },
    get HandlebarsContext() { return require('./handlebars_context'); }
};