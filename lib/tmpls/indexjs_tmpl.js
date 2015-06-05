/**
 * Template for json.
 * @memberof module:planter/lib/util/tmpls
 * @function indexjsTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

var core = require('../core'),
    path = core.path;

module.exports = path.resolve(__dirname, 'hbs/index.js.hbs');