/**
 * Meta framework for template-driven-development.
 * @module coz
 */

"use strict";

var Coz = require('./coz');

exports = module.exports = new Coz();

exports.bud = require('./bud');
exports.template = require('./template');
exports.util = require('./util');


exports.Coz = Coz;
exports.factory = require('./bud/factory');