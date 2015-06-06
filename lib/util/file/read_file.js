/**
 * Read a file.
 * @memberof module:kyo/lib/util/file
 * @function readFile
 * @param {string} filename - Filename to read.
 * @param {object} [options] - Optional settings.
 * @param {function} callback - Callback when done.
 */

"use strict";


var core = require('../../core'),
    ext = require('../../ext'),
    fs = core.fs;

/** @lends readFile */
function readFile(filename, options, callback) {
    options = options || {};
    if (typeof(options) === 'function') {
        callback = callback || options;
        options = {};
    }
    fs.exists(filename, function (exists) {
        if (exists) {
            fs.readFile(filename, callback);
        } else {
            callback(null, null);
        }
    });
}

module.exports = readFile;