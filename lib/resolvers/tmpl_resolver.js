/**
 * Resolver for tmpls.
 * @memberof module:leaf/lib/resolvers
 * @constructor TmplResolver
 * @param {string} name - Name of compiler to resolve.
 * @returns {function|null} - Resolved compiler.
 */


"use strict";

var tmpls = require('../tmpls'),
    Resolver = require('./resolver'),
    copy = require('../util/copying/copy');

/** @lends TmplResolver */
var TmplResolver = Resolver.define(
    /** @lends TmplResolver.prototype */
    {
        _fromFilesystem: function (name) {
            var s = this;
            var filename = s._resolvePath(name);
            if (s._fileExists(filename)) {
                return filename;
            }
            return null;
        },
        /**
         * Resolve a tmpl.
         * @param {string} name - Name of tmpl.
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
                    var fromFilesystem = s._fromFilesystem(name);
                    if (fromFilesystem) {
                        return fromFilesystem;
                    }
                    return null;
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
