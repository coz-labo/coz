/**
 * @module planter
 * Meta framework for template-driven-development.
 */

"use strict";

var Planter = require('./planter');

module.exports = new Planter();

exports.Planter = Planter;
exports.bud = require('./bud');
exports.engines = require('./engines');
exports.helpers = require('./helpers');
exports.resolvers = require('./resolvers');
exports.tmpls = require('./tmpls');
exports.utils = require('./util');