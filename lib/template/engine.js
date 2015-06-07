/**
 * Abstract engine. All engine should inherit this class.
 * @memberof module:coz/lib/template
 * @inner
 * @constructor Engine
 * @param {object} options - Optional settings.
 */

"use strict";

var core = require('../core'),
    assert = core.assert;

/** @lends module:coz/lib/template~Engine */
function Engine() {
    var s = this;
    s.init.apply(s, arguments);
}
Engine.prototype = {

    //------------------------
    // Public methods
    //------------------------
    /**
     * Name of this module.
     * This property will be use by resolve to find the engine.
     * @abstract
     * @type {string}
     */
    $name: undefined,

    /**
     * Alias name of this module.
     * This property will be use by resolve to find the engine.
     * @abstract
     * @type {string[]}
     */
    $aliases: undefined,
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
     * @param {string|object} key - Key for property.
     * @param {?*} [val] - Value to set.
     * @returns {Engine} - Returns self for chaining.
     * @example
     * engine.set('foo', 'bar');
     * engine.set({foo: 'bar'});
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
     * Precompile a template string.
     * Precompiled template is a string with represents compiled template function.
     * @abstract
     * @param {string} source - Template source string.
     * @param {module:coz/lib/template~precompileCallback} callback - callback when done.
     */
    precompile: function (source, callback) {
        throw new Error('[precompile]Not implemented!');
    },
    /**
     * Compile a template string.
     * Compiled template is a function.
     * @abstract
     * @param {string} source - Template source string.
     * @param {module:coz/lib/template~compileCallback} callback - Callback when done.
     */
    compile: function (source, callback) {
        throw new Error('[compile]Not implemented!');
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
    assert(properties, "Properties is required.");

    var DefinedEngine = function () {
        var s = this;
        s.init.apply(s, arguments);
    };
    DefinedEngine.$isEngine = true;

    DefinedEngine.prototype = new Engine().set(properties);
    DefinedEngine.prototype._constructor = DefinedEngine;

    DefinedEngine.$name = properties.$name;
    DefinedEngine.$aliases = [].concat(properties.$aliases || []);

    assert(properties.$name, "$name is required. This will be used by resolver.");
    assert(properties.compile, "properties.compile is should be required.");


    return DefinedEngine;
};

module.exports = Engine;


/**
 * Callback for engine precompile function.
 * @memberof module:coz/lib/template
 * @inner
 * @callback precompileCallback
 * @param {?Error} err - precompile err
 * @param {string} tmplFunctionString - Precompiled template function.
 */

/**
 * Callback for engine compile function.
 * @memberof module:coz/lib/template
 * @inner
 * @callback compileCallback
 * @param {?Error} err - Compile err
 * @param {function} tmpl - Compiled template function.
 */