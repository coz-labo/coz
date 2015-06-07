/**
 * Write a file.
 * @memberof module:coz/lib/util/file
 * @function writeFile
 * @param {string} filename - Filename to write.
 * @param {string|buffer} content - Content to write.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.mode='644'] - File permission to write.
 * @param {boolean} [options.force=false] - Force even if readonly file exists.
 * @param {boolean} [options.mkdirp=false] - Make parent directories if needed.
 * @param {function} callback - Callback when done.
 */

"use strict";

var core = require('../../core'),
    ext = require('../../ext'),
    async = ext.async,
    unlinkFile = require('./unlink_file'),
    mkdirp = ext.mkdirp,
    path = core.path,
    fs = core.fs;

/** @lends writeFile */
function writeFile(filename, content, options, callback) {
    options = options || {};
    if (typeof(options) === 'function') {
        callback = callback || options;
        options = {};
    }
    async.series([
        function (callback) {
            if (!!options.force) {
                unlinkFile(filename, {force: true}, callback);
            } else {
                callback(null);
            }
        },
        function (callback) {
            if (!!options.mkdirp) {
                mkdirp(path.dirname(filename), callback);
            } else {
                callback(null)
            }
        },
        function (callback) {
            fs.writeFile(filename, content, {
                mode: options.mode || '644'
            }, callback);
        }
    ], function (err) {
        callback(err);
    });
}

module.exports = writeFile;