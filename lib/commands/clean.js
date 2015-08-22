/**
 * Handle clean command.
 * @memberof module:coz/lib/commands
 * @function clean
 * @param {string} filename - Source filename. Could be glob pattern.
 * @param {object} options - Optional settings.
 * @param {boolean} [options.verbose=false] - Log verbose.
 * @param {function} [callback] - Callback when done.
 */

"use strict";

var create = require('../create'),
    fs = require('fs');

/** @lends clean */
function clean(filename, options, callback) {
    options = options || {};
    var coz = create(options.configuration);
    coz.clean(filename, {
        verbose: !!options.verbose
    }, callback);
}

clean.help = fs.readFileSync(__dirname + '/helps/clean-help.txt', 'utf-8');

module.exports = clean;
