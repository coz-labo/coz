/**
 * Engine for handlebars.
 * @memberof leaf/lib/template/engines
 * @augments Engine
 * @constructor HandlebarsEngine
 * @param {object} options - Optional settings.
 * @param {object} options.helpers - Handlebars helper functions.
 * @see http://handlebarsjs.com/
 */

"use strict";

var ext = require('../../ext'),
    handlebars = ext.handlebars,
    Engine = require('./engine'),
    string = require('../../util/string'),
    compiling = require('../../util/compiling'),
    minifying = require('../../util/minifying');

/** @lends HandlebarsEngine */
var HandlebarsEngine = Engine.define(
    /** @lends HandlebarsEngine.prototype */
    {
        init: function (options) {
            var s = this;
            options = options || {};
            s.registerHelpers(HandlebarsEngine.buildinHelpers);
            s.registerHelpers(options.helpers);
        },
        precompile: function (source, callback) {
            var s = this;
            s._tryAsync(function () {
                var precompiled = compiling.precompileHandlebars(source, {
                    helpers: s.helpers
                });
                return minifying.minifyJavascript(precompiled);
            }, callback);
        },
        compile: function (source, callback) {
            var s = this;
            s._tryAsync(function () {
                return compiling.compileHandlebars(source, {
                    helpers: s.helpers
                });
            }, callback);
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
        },
        _tryAsync: function (task, callback) {
            var s = this;
            var result;
            try {
                result = task.call(s);
            } catch (e) {
                callback(e);
                return;
            }
            callback(null, result);
        }
    });

/**
 * Create template from precompiled
 * @returns {function} - Handlebars context.
 */
HandlebarsEngine.createHandlebars = function () {
    var Handlebars = handlebars.create();
    var helpers = HandlebarsEngine.buildinHelpers;
    if (helpers) {
        Object.keys(helpers).forEach(function (name) {
            var helper = helpers[name];
            Handlebars.registerHelper(name, helper);
        });
    }
    return Handlebars;
};

/**
 * Handlebars helpers.
 * @type {object}
 */
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