/**
 * Bud configuration.
 * @constructor Bud
 * @memberof module:leaf/lib/bud
 * @param {object} config - Configuration values.
 * @param {string|function} [config.engine='handlebars'] - Template compile function or name of function.
 * @param {string|cwd} [config.cwd=process.cwd()] - Current working directory.
 * @param {object} - [config.data] - Rendering values.
 * @param {object} - [config.helpers] - Rendering helpers.
 * @param {boolean} [config.force=false] - Force to write or not.
 * @param {string|number} [config.mode='644'] - File permission.
 * @param {!string} config.path - File path to render.
 * @param {string} config.src - Source file path of bud.
 * @param {string|function} [config.tmpl='json'] - Template file path or template function.
 */

"use strict";

var core = require('../core'),
    copying = require('../util/copying'),
    assert = core.assert;


/** @lends Bud */
function Bud(config) {
    var s = this;
    copying.copy(config, s);
    copying.fallbackCopy(Bud.defaults, s);
    s.validate();
}


Bud.prototype = {
    /** Date when rendered last time. */
    at: undefined,
    /** Template compile engine */
    engine: 'handlebars',
    /** Data to render with template */
    data: undefined,
    /** Done or not */
    done: false,
    /** Should mkdirp when render */
    mkdirp: false,
    /** File permission */
    mode: '644',
    /** File output */
    out: undefined,
    /** File name to write */
    path: undefined,
    /** Bud file name */
    src: undefined,
    /** Template name */
    tmpl: 'json',
    /** Working directory path */
    cwd: process.cwd(),
    /**
     * Validate this configuration.
     */
    validate: function () {
        var s = this;

        function _assertType(value, types, msg) {
            if (typeof(value) === 'undefined') {
                return;
            }
            assert(!!~types.indexOf(typeof(value)), msg);
        }

        _assertType(s.cwd, ['string'], 'bud.cwd should be string or function.');
        _assertType(s.engine, ['string', 'object'], 'bud.engine should be string or object.');
        _assertType(s.data, ['object'], 'bud.data should be object.');
        _assertType(s.done, ['boolean'], 'bud.data should be boolean.');
        _assertType(s.helpers, ['object'], 'bud.helpers should be object.');
        _assertType(s.force, ['boolean', 'number'], 'bud.force should be boolean for number.');
        _assertType(s.out, ['string'], 'bud.out should be string.');
        _assertType(s.path, ['string'], 'bud.path should be string.');
        _assertType(s.mkdirp, ['boolean'], 'bud.mkdirp should be boolean.');
        _assertType(s.mode, ['string', 'number'], 'bud.mode should be string or number.');
        _assertType(s.tmpl, ['string', 'function'], 'bud.tmpl should be string or function.');
    }
};

/**
 * Create new buds.
 * @param {object} config - Bud config.
 * @returns {Bud} - A new bud.
 */
Bud.new = function (config) {
    if (typeof(config) === 'string') {
        config = {src: config};
    }
    return new Bud(config);
};


module.exports = Bud;