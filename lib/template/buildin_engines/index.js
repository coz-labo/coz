/**
 * Buildin template engine modules.
 * @module coz/lib/template/buildin_engines
 * @see module:coz/lib/template
 */

"use strict";

module.exports = {
    /**
     * @memberof module:coz/lib/template/buildin_engines
     * @name {@link module:coz/lib/template/buildin_engines~HandlebarsEngine|HandlebarsEngine}
     */
    get HandlebarsEngine() { return require('./handlebars_engine'); }
};