/**
 * Handle each bud.
 * @memberof module:coz/lib
 * @function eachBud
 * @param {string|string[]} pattern - Bud filename patterns.
 * @param {function} handler - Handler for each bud.
 * @param {function} callback - Callback when done.
 */

"use strict";

var expandglob = require('expandglob'),
    path = require('path'),
    async = require('async');

/** @lends eachBud */
function eachBud(pattern, handler, callback) {
    async.concat([].concat(pattern), function (pattern, callback) {
        switch (typeof(pattern)) {
            case 'object':
                var bud = pattern; //Actually a bud.
                var parent = module.parent;
                bud.cwd = bud.cwd || (parent && path.dirname(parent.filename)) || process.cwd();
                handler(bud, callback);
                break;
            default:
                _eachFiles([].concat(pattern), handler, callback);
                break;
        }
    }, callback);
}

function _eachFiles(pattern, handler, callback) {
    async.waterfall([
        function (callback) {
            expandglob(pattern, callback);
        },
        function (filenames, callback) {
            var notFound = (pattern.length > 0) && (filenames.length == 0);
            if (notFound) {
                console.warn('File not found with pattern:', pattern);
            }
            async.eachSeries(filenames, handler, callback);
        }
    ], callback);
}

module.exports = eachBud;
