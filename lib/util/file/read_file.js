/**
 * Read a file.
 * @memberof module:coz/lib/util/file
 * @function readFile
 * @param {string} filename - Filename to read.
 * @param {object} [options] - Optional settings.
 * @param {function} callback - Callback when done.
 */

"use strict";


var argx = require('argx'),
    fs = require('fs');

/** @lends readFile */
function readFile(filename, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    fs.exists(filename, function (exists) {
        if (exists) {
            fs.readFile(filename, callback);
        } else {
            callback(null, null);
        }
    });
}

module.exports = readFile;