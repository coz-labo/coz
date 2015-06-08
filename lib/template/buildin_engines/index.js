/**
 * Buildin template engine modules.
 * @module coz/lib/template/buildinEngines
 * @see module:coz/lib/template
 */

"use strict";

module.exports = {
    /**
     * @memberof module:coz/lib/template/buildinEngines
     * @name {@link module:coz/lib/template/buildinEngines~HandlebarsEngine|HandlebarsEngine}
     */
    get HandlebarsEngine() { return require('./handlebars_engine'); }
};