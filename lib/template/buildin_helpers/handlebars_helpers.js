/**
 * Engine for handlebars.
 * @memberof module:coz/lib/template/buildin_helpers
 * @namespace handlebarsHelpers
 * @see http://handlebarsjs.com/
 */

"use strict";

var core = require('../../core'),
    fs = core.fs,
    path = core.path,
    string = require('../../util/string');


//Find basedir from $$bud in Handlebars context.
function _basedirWithContext(ctx) {
    var data = ctx && ctx.data,
        $$bud = data && data.root && data.root['$$bud'] || {};
    return $$bud.cwd || process.cwd();
}


/** @lends module:coz/lib/template/buildin_helpers.handlebarsHelpers */
module.exports = {
    /**
     * Get base name for a path.
     * @param {string} value - Pathname.
     * @returns {string} - Basename of given path.
     */
    basename: function (value) {
        return path.basename(value);
    },
    /**
     * Wrap string with braces.
     * @param {string} value - Value to wrap with braces.
     * @returns {string} - Wrapped string.
     */
    braces: function (value) {
        return '{' + value + '}';
    },
    /**
     * Convert into camel case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    camelcase: function (value) {
        return string.camelcase(value);
    },
    /**
     * Get directory name for a path.
     * @param {string} value - Pathname.
     * @returns {string} - Directory name of given path.
     */
    dirname: function (value) {
        return path.dirname(value);
    },
    /**
     * Get extension name for a path.
     * @param {string} value - Pathname.
     * @returns {string} - Extension name of given path.
     */
    extname: function (value) {
        return path.extname(value);
    },
    /**
     * Replace string into numeric.
     * Only number or "." or "," will be remain.
     * @param {string} value - String.
     * @returns {string} - Numeric string.
     */
    numeric: function (value) {
        return value && String(value).replace(/[^\d\.,]/g, '') || '';
    },
    /**
     * Read a file content.
     * @param {string} value - Path name of the file to read.
     * @returns {string} - File content string.
     */
    read: function (value) {
        var basedir = _basedirWithContext(arguments[1]);
        var filename = path.resolve(basedir, value);
        var exists = fs.existsSync(filename);
        if (exists) {
            return String(fs.readFileSync(filename));
        }
        return '';
    },
    /**
     * Convert into lower case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    lowercase: function (value) {
        return string.lowercase(value);
    },
    /**
     * Convert into snake case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    snakecase: function (value) {
        return string.snakecase(value);
    },
    /**
     * Convert into pascal case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    pascalcase: function (value) {
        return string.pascalcase(value);
    },
    /**
     * Convert into sentence case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    sentencecase: function (value) {
        return string.sentencecase(value);
    },
    /**
     * Convert into spinal case string
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    spinalcase: function (value) {
        return string.spinalcase(value);
    },
    /**
     * Convert into upper case string.
     * @param {string} value - String value to convert.
     * @returns {string} - Converted string.
     */
    uppercase: function (value) {
        return string.uppercase(value);
    }
};


