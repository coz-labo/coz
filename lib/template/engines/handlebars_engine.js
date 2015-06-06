/**
 * Engine for handlebars.
 * @memberof leaf/lib/template/engines
 * @augments Engine
 * @constructor Engine
 * @param {object} options - Optional settings.
 * @param {object} options.helpers - Handlebars helper functions.
 * @see http://handlebarsjs.com/
 */

"use strict";

var Engine = require('./engine'),
    string = require('../../util/string'),
    compiling = require('../../util/compiling');

var HandlebarsEngine = Engine.define({
    init: function (options) {
        var s = this;
        options = options || {};
        s.registerHelpers(HandlebarsEngine.buildinHelpers);
        s.registerHelpers(options.helpers);
    },
    compile: function (source, callback) {
        var s = this;
        var compiled;
        try {
            compiled = compiling.compileHandlebars(source, {
                helpers: s.helpers
            });
        } catch (e) {
            callback(e);
            return;
        }
        callback(null, compiled);
    },
    /**
     * Helper functions.
     * @type {object}
     */
    helpers: undefined,
    /**
     * Register a helper.
     * @param {string} name - Name of the helper.
     * @param {function} helper - Helper function.
     * @returns {HandlebarsEngine} - Returns self.
     */
    registerHelper: function (name, helper) {
        var s = this;
        s.helpers = s.helpers || {};
        s.helpers[name] = helper;
        return s;
    },
    /**
     * Register multiple helpers.
     * @param {object} helpers - Helpers to register.
     * @returns {HandlebarsEngine} - Returns self.
     */
    registerHelpers: function (helpers) {
        var s = this,
            names = Object.keys(helpers || {});
        for (var i = 0, len = names.length; i < len; i++) {
            var name = names[i];
            s.registerHelper(name, helpers[name]);
        }
        return s;
    }
});

HandlebarsEngine.buildinHelpers = {
    /**
     * Convert into camel case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    camelcase: function (value) {
        return string.camelcase(value);
    },
    /**
     * Convert into lower case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    lowercase: function (value) {
        return string.lowercase(value);
    },
    /**
     * Convert into snake case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    snakecase: function (value) {
        return string.snakecase(value);
    },
    /**
     * Convert into pascal case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    pascalcase: function (value) {
        return string.pascalcase(value);
    },
    /**
     * Convert into sentence case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    sentencecase: function (value) {
        return string.sentencecase(value);
    },
    /**
     * Convert into spinal case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    spinalcase: function (value) {
        return string.spinalcase(value);
    },
    /**
     * Convert into upper case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    uppercase: function (value) {
        return string.uppercase(value);
    }
};


module.exports = HandlebarsEngine;