/**
 * Abstract engine. All engine should inherit this class.
 * @memberof leaf/lib/template/engines
 * @constructor Engine
 * @param {object} options - Optional settings.
 */

"use strict";


/** @lends Engine */
function Engine() {
    var s = this;
    s.init.apply(s, arguments);
}
Engine.prototype = {

    //------------------------
    // Public methods
    //------------------------

    /**
     * Initialize a engine.
     * @abstract
     * @param {object} options - Optional settings.
     */
    init: function (options) {
        var s = this;
    },
    /**
     * Clone this engine.
     * @returns {*} - Clone of engine.
     */
    clone: function () {
        var s = this;
        var Constructor = s._constructor;
        var clone = new Constructor(s);
        clone.set(s);
        return clone;
    },
    /**
     * Get a property.
     * @param {string} key - Key for property.
     * @returns {*} - Property value.
     */
    get: function (key) {
        var s = this;
        return s[key];
    },
    /**
     * Set a property to this property.
     * You set multiple properties by passing a single, object-type argument.
     * @function set
     * @param {string|object} key - Key for property.
     * @param {?*} [val] - Value to set.
     * @returns {Engine} - Returns self for chaining.
     * @example
     *      engine.set('foo', 'bar');
     *      engine.set({foo: 'bar'});
     */
    set: function (key, val) {
        var s = this;
        var args = arguments;
        var multiple = typeof(args[0]) === 'object';
        if (multiple) {
            s._setProperties(args[0]);
        } else {
            s._setProperty(key, val);
        }
        return s;
    },
    /**
     * Compile a template string.
     * @abstract
     * @param {string} source - Template source string.
     * @param {engineCompileCallback} callback - Callback when done.
     */
    compile: function (source, callback) {
        throw new Error('Not implemented!');
    },


    //------------------------
    // Private properties
    //------------------------


    /**
     * Constructor class.
     * @function
     * @private
     */
    _constructor: Engine,
    /**
     * Set a property.
     * @param {string} key - Key for property.
     * @param {*} val - Value to set.
     * @returns {Engine} - Returns self for chaining.
     * @private
     */
    _setProperty: function (key, val) {
        var s = this;
        s[key] = val;
        return s;
    },
    /**
     * Set multiple properties.
     * @param {object} values - Properties to set.
     * @returns {Engine} - Returns self for chaining.
     * @private
     */
    _setProperties: function (values) {
        var s = this,
            keys = Object.keys(values || {});
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            s._setProperty(key, values[key]);
        }
        return s;
    }
};


/**
 * Define a engine constructor.
 * @param {object} properties - Properties for constructor.
 * @returns {function} - Constructor function.
 */
Engine.define = function (properties) {
    var DefinedEngine = function () {
        var s = this;
        s.init.apply(s, arguments);
    };
    DefinedEngine.prototype = new Engine().set(properties);
    DefinedEngine.prototype._constructor = DefinedEngine;
    return DefinedEngine;
};

module.exports = Engine;


/**
 * Callback for engine compile function.
 * @callback engineCompileCallback
 * @param {Error} err - Compile err
 * @param {function} tmpl - Compiled template function.
 */