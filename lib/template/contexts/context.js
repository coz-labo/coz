/**
 * Abstract context. Provides generic use functions.
 * @memberof leaf/lib/template/contexts
 * @constructor Context
 * @param {object} properties - Context properties.
 */

"use strict";

var string = require('../../util/string');

/** @lends Context */
function Context() {
    var s = this;
    s.init.apply(s, arguments);
}
Context.prototype = {

    //------------------------
    // Public methods
    //------------------------

    /**
     * Initialize a context.
     * @param {object} properties - Context properties.
     */
    init: function (properties) {
        var s = this;
        s.set(Context.methods);
        s.set(properties);
    },
    /**
     * Clone this context.
     * @returns {*} - Clone of context.
     */
    clone: function () {
        var s = this;
        var Constructor = s._constructor;
        return new Constructor(s);
    },
    /**
     * Set a property to this property.
     * You set multiple properties by passing a single, object-type argument.
     * @param {string|object} key - Key for property.
     * @param {?*} val - Value to set.
     * @returns {Context} - Returns self for chaining.
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


    //------------------------
    // Private properties
    //------------------------


    /**
     * Constructor class.
     * @function
     * @private
     */
    _constructor: Context,
    /**
     * Set a property.
     * @param {string} key - Key for property.
     * @param {*} val - Value to set.
     * @returns {Context} - Returns self for chaining.
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
     * @returns {Context} - Returns self for chaining.
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

Context.methods = {
    /**
     * Convert into camel case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Came case string.
     */
    camelcase: function (value) {
        return string.camelcase(value);
    },
    /**
     * Convert into snake case string
     * @param {string} value - String value to convert.
     * @returns {string} - Snake case string.
     */
    snakecase: function (value) {
        return string.snakecase(value);
    },
    pascalcase: string.pascalcase
};

/**
 * Define a context constructor.
 * @param {object} properties - Properties for constructor.
 * @returns {function} - Constructor function.
 */
Context.define = function (properties) {
    var DefinedContext = function () {
        var s = this;
        s.init.apply(s, arguments);
    };
    DefinedContext.prototype = new Context(properties);
    DefinedContext.prototype._constructor = DefinedContext;
    return DefinedContext;
};

module.exports = Context;