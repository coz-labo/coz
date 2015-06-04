/**
 * Resolver for engines.
 * @memberof module:planter/lib/resolvers
 * @constructor EngineResolver
 * @param {string} name - Name of compiler to resolve.
 * @returns {function|null} - Resolved compiler.
 */


"use strict";

var engines = require('../engines'),
    Resolver = require('./resolver'),
    copy = require('../util/copy/copy');

/** @lends EngineResolver */
var EngineResolver = Resolver.define(
    /** @lends EngineResolver.prototype */
    {
        /**
         * Resolve a component.
         * @param {string} name - Name of component.
         * @returns {*} - Resolved tmpl.
         */
        resolve: function (name) {
            var s = this;
            switch (typeof(name)) {
                case 'function':
                    return name;
                case 'string':
                    var byName = s._findByName(name, s._suffixes);
                    if (byName) {
                        return byName;
                    }
                    return s._requireSafely(name);
                default:
                    return null;
            }
        },
        _suffixes: ['_engine', 'Engine'],
        _datasource: copy(engines)
    }
);

module.exports = EngineResolver;
