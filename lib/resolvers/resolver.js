/**
 * Abstract resolver.
 * @memberof module:leaf/lib/resolvers
 * @abstract
 * @constructor Resolver
 * @param {object} components - Components to resolve.
 */

"use strict";

var copy = require('../util/copying/copy'),
    core = require('../core'),
    fs = core.fs,
    path = core.path;


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
    init: function (components) {
        var s = this;
        s._components = copy(components, s._components || {});
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
    /**
     * Set basedir.
     * @param {string} basedir - Base directory name.
     * @returns {Resolver} - Returns this.
     */
    basedir: function (basedir) {
        var s = this;
        s._basedir = basedir;
        return s;
    },
    // --------------------
    // Private properties.
    // --------------------
    /**
     * Base directory name.
     * @type {string}
     */
    _basedir: process.cwd(),
    /** @type object */
    _components: undefined,
    /**
     * Find component by name.
     * @param {string} name - Name to match.
     * @param {?string[]} suffixes - Possible suffixes.
     * @returns {*} Found component.
     * @private
     */
    _findByName: function findByName(name, suffixes) {
        var s = this,
            components = s._components;
        if (components.hasOwnProperty(name)) {
            return components[name];
        }
        if (suffixes) {
            for (var i = 0; i < suffixes.length; i++) {
                var foundBySuffix = s._findByName(name + suffixes[i], []);
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
     * @private
     */
    _requireSafely: function requireSafely(name) {
        var s = this;
        try {
            return require(s._resolvePath(name));
        } catch (e) {
            // Ignore exception.
            return null;
        }
    },
    /**
     * Resolve path.
     * @param {string} name - Name to resolve.
     * @returns {string} - Resolved filed name.
     * @private
     */
    _resolvePath: function (name) {
        var s = this;
        return path.resolve(s._basedir, name);
    },
    /**
     * Check if file exists.
     * @param {string} filename - Filename to check.
     * @returns {boolean} - Exists or not.
     * @private
     */
    _fileExists: function (filename) {
        var s = this;
        return fs.existsSync(filename);
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