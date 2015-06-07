/**
 * Meta framework for template-driven-development.
 * @module coz
 */

"use strict";

var Kyo = require('./coz');

exports = module.exports = new Kyo();

exports.Kyo = Kyo;
exports.factory = require('./factory');