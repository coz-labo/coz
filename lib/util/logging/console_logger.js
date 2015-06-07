/**
 * Console logger.
 * @memberof module:coz/logging
 * @constructor ConsoleLogger
 */

"use strict";

var ext = require('../../ext'),
    cliColor = ext.cliColor;

function ConsoleLogger() {
}

/**
 * Create a message.
 * @returns {string}
 * @private
 */
ConsoleLogger.prototype._msg = function () {
    return Array.prototype.slice.call(arguments, 0)
        .map(function (msg) {
            if (typeof(msg) === 'object') {
                return JSON.stringify(msg, null, 4);
            }
            return msg;
        })
        .join(' ');
};

/**
 * Decorate a text.
 * @param {string} text - Text to decorate.
 * @param {string} colorName - Color name.
 * @returns {string} - Decorated text.
 * @private
 */
ConsoleLogger.prototype._decorate = function (text, colorName) {
    var s = this,
        decorator = colorName && cliColor[colorName];
    return decorator ? decorator(text) : text;
};

/**
 * Print a message.
 * @param {function} printer - Print function.
 * @param {string} color - Color name.
 * @param {string[]} messages - Messages.
 * @private
 */
ConsoleLogger.prototype._print = function (printer, color, messages) {
    var s = this,
        msg = s._msg.apply(s, messages);
    printer(s._decorate(msg, color));
};

/**
 * Print info message.
 */
ConsoleLogger.prototype.info = function () {
    var s = this;
    s._print(console.log, 'green', arguments);
};

/**
 * Print debug message.
 */
ConsoleLogger.prototype.debug = function () {
    var s = this;
    s._print(console.log, 'black', arguments);
};

/**
 * Print trace message.
 */
ConsoleLogger.prototype.trace = function () {
    var s = this;
    s._print(console.log, 'white', arguments);
};

/**
 * Print error message.
 */
ConsoleLogger.prototype.error = function () {
    var s = this;
    s._print(console.error, 'red', arguments);
};

/**
 * Print fatal message.
 */
ConsoleLogger.prototype.fatal = function () {
    var s = this;
    s._print(console.error, 'bgRed', arguments);
};


module.exports = ConsoleLogger;