/**
 * Abstract resolver.
 * @memberof module:planter/lib/resolvers
 * @abstract
 * @constructor Resolver
 * @param {object} datasource
 */

"use strict";

var copy = require('../util/copy/copy');


/** @lends Resolver */
function Resolver() {
    var s = this;
    s.init.apply(s, arguments);
}

Resolver.prototype = {

    // --------------------
    // Public properties.
    // --------------------

    /**
     * Initialize resolver.
     */
    init: function (datasource) {
        var s = this;
        s._components = copy(datasource, s._components || {});
    },
    /**
     * Register an component.
     * @param {string} name - Name to register.
     * @param {*} component - Component to register.
     */
    register: function (name, component) {
        var s = this;
        s._components[name] = component;
    },
    /**
     * Register multiple component.
     * @param {object} components - Components to register.
     */
    registerAll: function (components) {
        var s = this;
        Object.keys(components).forEach(function (key) {
            s.register(key, components[key]);
        });
    },
    /**
     * Resolve a component.
     * @param {string} name - Name of component.
     * @returns {*} - Resolved component.
     */
    resolve: function (name) {
        throw new Error('Not implemented!');
    },
    /**
     * Get all components
     * @returns {object} - All components
     */
    all: function () {
        var s = this;
        return copy(s._components);
    },

    // --------------------
    // Private properties.
    // --------------------

    /** @type object */
    _components: undefined,
    /**
     * Find component by name.
     * @param {string} name - Name to match.
     * @param {?string[]} suffixes - Possible suffixes.
     * @returns {*} Found component.
     */
    _findByName: function findByName(name, suffixes) {
        var s = this,
            datasource = s._components;
        if (datasource.hasOwnProperty(name)) {
            return datasource[name];
        }
        if (suffixes) {
            for (var i = 0; i < suffixes.length; i++) {
                var foundBySuffix = s._findByName(name + suffixes[i]);
                if (foundBySuffix) {
                    return foundBySuffix;
                }
            }
        }
        return null;
    },
    /**
     * Require module safely.
     * Even if failed, returns null and not raise an error.
     * @param {string} name - Name of module.
     * @returns {*} - Required module or null.
     */
    _requireSafely: function requireSafely(name) {
        try {
            return require(name);
        } catch (e) {
            // Ignore exception.
            return null;
        }
    }
};

Resolver.define = function (properties) {
    function Defined() {
        var s = this;
        s.init.apply(s, arguments);
    }

    Defined.prototype = copy(properties, new Resolver());
    return Defined;
};


module.exports = Resolver;