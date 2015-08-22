/**
 * Do some task on each files.
 * @memberof module:coz/lib/util/flow
 * @function eachFiles
 * @param {string|string[]} pattern - Filename pattern to work with.
 * @param {function} handler - Handle a single filename.
 * @param {function} callback - Callback when done.
 */

"use strict";

var expandglob = require('expandglob'),
    async = require('async');

/** @lends eachFiles */
function eachFiles(pattern, handler, callback) {
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

module.exports = eachFiles;
