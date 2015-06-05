/**
 * Handle blossom command.
 * @memberof module:leaf/commands
 * @function blossom
 * @param {string} src - Source filename. Could be glob pattern.
 * @param {object} options.verbose - Log verbose.
 * @param {function} [callback] - Callback when done.
 */

"use strict";

var create = require('../create'),
    core = require('../core'),
    fs = core.fs;

/** @lends blossom */
function blossom(src, options, callback) {
    var leaf = create({});
    leaf.blossom(src, options, callback);
}

blossom.help = fs.readFileSync(__dirname + '/helps/blossom-help.txt', 'utf-8');

module.exports = blossom;
