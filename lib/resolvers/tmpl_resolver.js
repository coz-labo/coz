/**
 * Resolver for tmpls.
 * @memberof module:planter/lib/resolvers
 * @constructor TmplResolver
 * @param {string} name - Name of compiler to resolve.
 * @returns {function|null} - Resolved compiler.
 */


"use strict";

var tmpls = require('../tmpls'),
    Resolver = require('./resolver'),
    copy = require('../util/copy/copy');

/** @lends TmplResolver */
var TmplResolver = Resolver.define(
    /** @lends TmplResolver.prototype */
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
        _suffixes: [
            '_tmpl', '_template', 'Tmpl', 'Template'
        ],
        _datasource: copy(tmpls)
    }
);

module.exports = TmplResolver;
