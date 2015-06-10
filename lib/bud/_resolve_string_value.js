/**
 * Resolve a string.
 * If a string is a existing file path, returns the file content. Otherwise the original string.
 * @memberof coz/lib/bud
 * @function _resolveStringValue
 * @param {string} string - String to resolve
 * @param {string} basedir - Base directory path.
 * @param {function} callback - Callback when done.
 * @private
 */

"use strict";

var core = require('../core'),
    path = core.path,
    file = require('../util/file');

function _resolveStringValue(string, basedir, callback) {
    var isString = typeof(string) === 'string';
    if (!isString) {
        callback(null, string);
        return;
    }
    var filename = path.resolve(basedir, string);
    file.readFile(filename, function (err, read) {
        if (!err && read) {
            string = read;
        }
        callback(null, string);
    });
}
module.exports = _resolveStringValue;