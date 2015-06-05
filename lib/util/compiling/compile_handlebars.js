/**
 * Compile handlebars template string.
 * @memberof module:leaf/lib/util/compiling
 * @function compileHandlebars
 * @param {string} source - Template source string.
 * @param {object} options - Optional settings.
 * @param {object} [options.helpers] - Handlebars helper functions to register.
 * @returns {function} Handlebars template function.
 * @example
 *     var tmpl = compileHandlebars('Here are {{toLowercase name}}.', {
 *          helpers: {
 *              toLowercase: function(str){ return str.toLowerCase(); }
 *          }
 *     });
 *     console.log(tmpl({name: 'Red Apples'}));
 *          // -> Here are red apples.
 * @see http://handlebarsjs.com/
 */

"use strict";

var ext = require('../../ext'),
    handlebars = ext.handlebars;

/** @lends compileHandlebars */
function compileHandlebars(source, options) {
    if (!source) {
        return null;
    }
    options = options || {};
    var Handlebars = handlebars.create();
    if (options.helpers) {

        Object.keys(options.helpers).forEach(function (name) {
            var helper = options.helpers[name];
            Handlebars.registerHelper(name, helper);
        });
    }
    return Handlebars.compile(String(source));
}

module.exports = compileHandlebars;