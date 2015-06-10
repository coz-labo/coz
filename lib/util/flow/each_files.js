/**
 * Do some task on each files.
 * @memberof module:coz/lib/util/flow
 * @function eachFiles
 * @param {string|string[]} pattern - Filename pattern to work with.
 * @param {function} handler - Handle a single filename.
 * @param {function} callback - Callback when done.
 */

"use strict";

var ext = require('../../ext'),
    file = require('../file'),
    async = ext.async;

/** @lends eachFiles */
function eachFiles(pattern, handler, callback) {
    async.waterfall([
        function (callback) {
            file.expandGlob(pattern, callback);
        },
        function (filenames, callback) {
            async.eachSeries(filenames, handler, callback);
        }
    ], callback);
}

module.exports = eachFiles;
