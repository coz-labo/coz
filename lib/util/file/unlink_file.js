/**
 * Unlink a file.
 * @memberof module:coz/lib/util/file
 * @function unlinkFile
 * @param {string} filename - Filename to unlink.
 * @param {object} [options] - Optional settings.
 * @param {boolean} [options.force] - Unlink even if readonly.
 * @param {function} callback - Callback when done.
 */

"use strict";

var core = require('../../core'),
    ext = require('../../ext'),
    async = ext.async,
    fs = core.fs,
    isDir = require('./is_dir');

function _doUnlink(filename, force, callback) {
    async.series([
        function chmodIfNeeded(callback) {
            if (force) {
                fs.chmod(filename, '666', function (err) {
                    callback(err);
                });
            } else {
                callback(null);
            }
        },
        function doUnlink(callback) {
            fs.unlink(filename, callback);
        }
    ], function (err) {
        callback(err);
    });
}

/** @lends unlinkFile */
function unlinkFile(filename, options, callback) {
    options = options || {};
    if (typeof(options) === 'function') {
        callback = callback || options;
        options = {};
    }
    fs.exists(filename, function (exists) {
        if (!exists) {
            callback(null);
            return;
        }
        isDir(filename, function (isDir) {
            if (isDir) {
                callback(new Error('[unlinkFile] Can not unlink directory:' + filename));
                return;
            }
            _doUnlink(filename, !!options.force, callback);
        });
    });
}

module.exports = unlinkFile;