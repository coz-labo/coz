/**
 * Bud compile engines.
 * @module leaf/lib/engines
 * @property handlebarsEngine {object} - {@link module:leaf/lib/engines.handlebarsEngine|handlebarsEngine module}.
 */

"use strict";

module.exports = {
    get handlebarsEngine() { return require('./handlebars_engine'); }
};