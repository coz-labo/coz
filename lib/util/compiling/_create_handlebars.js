/***
 * Create a new handlebars.
 * @function _createHandlebars
 * @param {object} helpers - Handlebars helpers.
 * @returns {Handlebars} - handlebars context.
 * @private
 */

"use strict";

var ext = require('../../ext'),
    handlebars = ext.handlebars;

/** @lends _createHandlebars */
function _createHandlebars(helpers) {
    var Handlebars = handlebars.create();
    if (helpers) {
        Object.keys(helpers).forEach(function (name) {
            var helper = helpers[name];
            Handlebars.registerHelper(name, helper);
        });
    }
    return Handlebars;
}

module.exports = _createHandlebars;