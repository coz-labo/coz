/**
 * Context for handlebars.
 * @memberof leaf/lib/template/helpers
 * @augments Context
 * @constructor HandlebarsContext
 * @param {object} properties - Context properties.
 */

var Context = require('./context');

"use strict";

/** @lends HandlebarsContext */
module.exports = Context.define(
    /** @lends HandlebarsContext.prototype */
    {}
);