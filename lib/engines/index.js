/**
 * Bud compile engines.
 * @module planter/lib/engines
 * @property handlebarsEngine {object} - {@link module:planter/lib/engines.handlebarsEngine|handlebarsEngine module}.
 */

"use strict";

module.exports = {
    get handlebarsEngine() { return require('./handlebars_engine'); }
};