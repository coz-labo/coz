/**
 * Engine for handlebars.
 * @memberof module:planter/lib/engines
 * @abstract
 * @function handlebarsEngine
 * @param {string} tmpl - Template to compile.
 * @param {object} helpers - Helper functions.
 * @param {function} callback - Callback when done.
 */
"use strict";

var ext = require('../ext'),
    async = ext.async,
    file = require('../util/file'),
    compile = require('../util/compile');

/** @lends handlebarsEngine */
function handlebarsEngine(tmpl, helpers, callback) {
    switch (typeof(tmpl)) {
        case 'function':
            callback(null, tmpl);
            break;
        case 'string':
            async.waterfall([
                function (callback) {
                    file.readFile(tmpl, callback);
                },
                function (content, callback) {
                    try {
                        var compiled = compile.compileHandlebars(content || tmpl, {
                            helpers: helpers
                        });
                        callback(null, compiled);
                    } catch (e) {
                        console.log('e', e);
                        callback(e);
                    }
                }
            ], callback);
            break;
        default:
            callback(null, null);
    }
}

module.exports = handlebarsEngine;