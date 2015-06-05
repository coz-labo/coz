/**
 * @module leaf
 * Meta framework for template-driven-development.
 */

"use strict";

var Leaf = require('./leaf');

exports = module.exports = new Leaf();

exports.Leaf = Leaf;
exports.printing = require('./printing');
exports.engines = require('./engines');
exports.helpers = require('./helpers');
exports.resolvers = require('./resolvers');
exports.tmpls = require('./tmpls');
exports.utils = require('./util');
exports.factory = require('./factory');