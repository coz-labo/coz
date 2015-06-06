/**
 * Abstract helper. Provides generic use functions.
 * @memberof leaf/lib/template/helpers
 * @constructor Helper
 * @param {object} properties - Helper properties.
 */

"use strict";

var string = require('../../util/string');

/** @lends Helper */
function Helper() {
    var s = this;
    s.init.apply(s, arguments);
}
Helper.prototype = {

    //------------------------
    // Methods for Constructing
    //------------------------

    /**
     * Initialize a helper.
     * @param {object} properties - Helper properties.
     */
    init: function (properties) {
        var s = this;
        s.set(properties);
    },
    /**
     * Clone this helper.
     * @returns {*} - Clone of helper.
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
     * @returns {Helper} - Returns self for chaining.
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
    // Methods for templating
    //------------------------

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


    //------------------------
    // Private properties
    //------------------------


    /**
     * Constructor class.
     * @function
     * @private
     */
    _constructor: Helper,
    /**
     * Set a property.
     * @param {string} key - Key for property.
     * @param {*} val - Value to set.
     * @returns {Helper} - Returns self for chaining.
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
     * @returns {Helper} - Returns self for chaining.
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
 * Define a helper constructor.
 * @param {object} properties - Properties for constructor.
 * @returns {function} - Constructor function.
 */
Helper.define = function (properties) {
    var DefinedHelper = function () {
        var s = this;
        s.init.apply(s, arguments);
    };
    DefinedHelper.prototype = new Helper(properties);
    DefinedHelper.prototype._constructor = DefinedHelper;
    return DefinedHelper;
};

module.exports = Helper;