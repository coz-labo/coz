/**
 * Template engine modules.
 * @module leaf/lib/template/engines
 */

"use strict";

module.exports = {
    get Engine() { return require('./engine'); },
    get HandlebarsEngine() { return require('./handlebars_engine'); }
};