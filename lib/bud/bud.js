/**
 * Bud constructor.
 * A bud contains file meta data like witch template to use, where to render it, what permission to give, and so on.
 * @inner
 * @constructor Bud
 * @memberof module:coz/lib/bud
 * @param {string|object} [config.engine='handlebars'] - Template compile function or name of function.
 * @param {string} [config.cwd=process.cwd()] - Working directory path.
 * @param {object} config.data - Data to template render with.
 * @param {boolean} [config.mkdirp] - Make parent directories if needed.
 * @param {object} [config.setup] - Properties to set engine.
 * @param {boolean} [config.force=false] - Should overwrite file when already exists, or not.
 * @param {string|number} [config.mode='644'] - File permission.
 * @param {string} [config.path] - Destination file path. If not provided, guess from bud file path.
 * @param {string|function} config.tmpl='json' - Template file path or registered template name or template function.
 */

"use strict";

var core = require('../core'),
    copying = require('../util/copying'),
    assert = core.assert;

/** @lends module:coz/lib/bud~Bud */
function Bud(config) {
    var s = this;
    copying.copy(config, s);
    copying.fallbackCopy(Bud.defaults, s);
    s.validate();
}

Bud.prototype = {
    /** Template compile function or name of function */
    engine: 'handlebars',
    /** Working directory path */
    cwd: process.cwd(),
    /** Data to template render with */
    data: undefined,
    /** Done to writeout or not */
    done: undefined,
    /** Make parent directories if needed */
    mkdirp: undefined,
    /** Properties to set engine */
    setup: undefined,
    /** Should overwrite file when already exists, or not */
    force: false,
    /** File permission */
    mode: '644',
    /** Destination file path. If not provided, guess from bud file path */
    path: undefined,
    /** Bud source file path */
    src: undefined,
    /** Template file path or registered template name or template function */
    tmpl: 'json',
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

        _assertType(s.engine, ['string' ,'object'], 'bud.engine should be string|object.');
        _assertType(s.cwd, ['string'], 'bud.cwd should be string.');
        _assertType(s.data, ['object'], 'bud.data should be object.');
        _assertType(s.done, ['boolean'], 'bud.done should be boolean.');
        _assertType(s.mkdirp, ['boolean'], 'bud.mkdirp should be boolean.');
        _assertType(s.setup, ['object'], 'bud.setup should be object.');
        _assertType(s.force, ['boolean'], 'bud.force should be boolean.');
        _assertType(s.mode, ['string' ,'number'], 'bud.mode should be string|number.');
        _assertType(s.path, ['string'], 'bud.path should be string.');
        _assertType(s.src, ['string'], 'bud.src should be string.');
        _assertType(s.tmpl, ['string' ,'function'], 'bud.tmpl should be string|function.');
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