/**
 * Template engine modules.
 * @module coz/lib/template/engines
 */

"use strict";

module.exports = {
    /**
     * @see {@link module:coz/lib/template/engines~HandlebarsEngine}
     */
    get HandlebarsEngine() { return require('./handlebars_engine'); }
};