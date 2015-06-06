/**
 * Resolver for helpers.
 * @memberof module:leaf/lib/resolvers
 * @constructor HelperResolver
 * @param {string} name - Name of compiler to resolve.
 * @returns {function|null} - Resolved compiler.
 */


"use strict";

var helpers = require('../template/helpers/handlebars_helper'),
    Resolver = require('./resolver'),
    copy = require('../util/copying/copy');

/** @lends HelperResolver */
var HelperResolver = Resolver.define(
    /** @lends HelperResolver.prototype */
    {
        /**
         * Resolve a helper.
         * @param {string} name - Name of helper.
         * @returns {*} - Resolved helper.
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
        _suffixes: ['_helper', 'Helper'],
        _datasource: copy(helpers)
    }
);

module.exports = HelperResolver;
