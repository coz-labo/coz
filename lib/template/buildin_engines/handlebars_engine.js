/**
 * Engine for handlebars.
 * @memberof module:coz/lib/template/buildin_engines
 * @inner
 * @augments module:coz/lib/template~Engine
 * @constructor HandlebarsEngine
 * @param {object} [options] - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions.
 * @see http://handlebarsjs.com/
 */

"use strict";

var core = require('../../core'),
    ext = require('../../ext'),
    fs = core.fs,
    path = core.path,
    handlebars = ext.handlebars,
    Engine = require('../engine'),
    string = require('../../util/string'),
    compiling = require('../../util/compiling'),
    buildinHelpers = require('../buildin_helpers/handlebars_helpers');

/** @lends module:coz/lib/template/buildin_engines~HandlebarsEngine */
var HandlebarsEngine = Engine.define(
    /** @lends module:coz/lib/template/buildin_engines~HandlebarsEngine.prototype */
    {
        $name: 'handlebars',
        $aliases: [
            'handlebarsEngine',
            'hbs',
            'hbsEngine'
        ],
        /**
         * Initialize handlebars engine.
         * @param {object} [options] - Optional settings.
         * @param {object} [options.helpers] - Handlebars helper functions.
         */
        init: function (options) {
            var s = this;
            options = options || {};
            s.registerHelpers(HandlebarsEngine.buildinHelpers);
            s.registerHelpers(options.helpers);
        },
        /**
         * @implements module:coz/lib/template~Engine.prototype.precompile
         */
        precompile: function (source, callback) {
            var s = this;
            s._tryAsync(function () {
                return compiling.precompileHandlebars(source, {
                    helpers: s.helpers
                });
            }, callback);
        },
        /**
         * @implements module:coz/lib/template~Engine.prototype.compile
         */
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
HandlebarsEngine.buildinHelpers = buildinHelpers;


module.exports = HandlebarsEngine;