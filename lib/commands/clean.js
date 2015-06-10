/**
 * Handle clean command.
 * @memberof module:coz/lib/commands
 * @function clean
 * @param {string} filename - Source filename. Could be glob pattern.
 * @param {object} options - Optional settings.
 * @param {object} options.verbose - Log verbose.
 * @param {function} [callback] - Callback when done.
 */

"use strict";

var create = require('../create'),
    core = require('../core'),
    fs = core.fs;

/** @lends clean */
function clean(filename, options, callback) {
    var coz = create({});
    coz.clean(filename, options, callback);
}

clean.help = fs.readFileSync(__dirname + '/helps/clean-help.txt', 'utf-8');

module.exports = clean;
