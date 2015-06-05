/**
 * Handle render command.
 * @memberof module:leaf/commands
 * @function render
 * @param {string} src - Source filename. Could be glob pattern.
 * @param {object} options.verbose - Log verbose.
 * @param {function} [callback] - Callback when done.
 */

"use strict";

var create = require('../create'),
    core = require('../core'),
    fs = core.fs;

/** @lends render */
function render(src, options, callback) {
    var leaf = create({});
    leaf.render(src, options, callback);
}

render.help = fs.readFileSync(__dirname + '/helps/render-help.txt', 'utf-8');

module.exports = render;
