/**
 * Meta framework for template-driven-development.
 * @module kyo
 */

"use strict";

var Kyo = require('./kyo');

exports = module.exports = new Kyo();

exports.Kyo = Kyo;
exports.factory = require('./factory');