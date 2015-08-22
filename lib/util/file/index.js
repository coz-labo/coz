/**
 * Utility functions for manipulate files.
 * @module coz/lib/util/file
 * @see module:coz/lib/util
 */

"use strict";

module.exports = {
    get isDir() { return require('./is_dir'); },
    get readFile() { return require('./read_file'); }
};