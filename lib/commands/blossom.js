/**
 * Handle blossom command.
 * @memberof module:planter/commands
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
    var planter = create({});
    planter.blossom(src, options, callback);
}

blossom.help = fs.readFileSync(__dirname + '/helps/blossom-help.txt', 'utf-8');

module.exports = blossom;
