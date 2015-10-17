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
    async.concatSeries([].concat(pattern), function (pattern, callback) {
        switch (typeof(pattern)) {
            case 'object':
                var bud = pattern; //Actually a bud.
                bud.cwd = bud.cwd || _cwd();
                handler(bud, callback);
                break;
            case 'function':
                async.waterfall([
                    function (callback) {
                        pattern(callback);
                    },
                    function (buds, callback) {
                        eachBud(buds, handler, callback);
                    }
                ], callback);
                break;
            default:
                _eachFiles([].concat(pattern), handler, callback);
                break;
        }
    }, callback);
}

function _cwd() {
    var parent = module.parent;
    return (parent && path.dirname(parent.filename)) || process.cwd();
}

function _eachFiles(pattern, handler, callback) {
    async.waterfall([
        function (callback) {
            expandglob(pattern, callback);
        },
        function (filenames, callback) {
            var notFound = (pattern.length > 0) && (filenames.length == 0);
            if (notFound) {
                console.warn('File not found with pattern:', [].concat(pattern));
            }
            async.eachSeries(filenames, handler, callback);
        }
    ], callback);
}

module.exports = eachBud;
