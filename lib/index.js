/**
 * @module leaf
 * Meta framework for template-driven-development.
 */

"use strict";

var Leaf = require('./leaf');

exports = module.exports = new Leaf();

exports.Leaf = Leaf;
exports.factory = require('./factory');