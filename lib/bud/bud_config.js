/**
 * Bud configuration.
 * @constructor BudConfig
 * @memberof module:planter/lib/bud
 * @param {object} config - Configuration values.
 * @param {boolean} [config.force=false] - Force to write or not.
 * @param {string|number} [config.mode='644'] - File permission.
 * @param {string|function} [config.compiler=bud.compiles.hbsCompiler] - Template compile function or name of function.
 * @param {string|function} [config.tmpl=bud.tmpls.jsonTmpl] - Template file path or template function.
 * @param {object} - [config.data={}] - Rendering values.
 */

"use strict";

var core = require('../core'),
    copy = require('../util/copy'),
    assert = core.assert,
    fallbackCopy = copy.fallbackCopy;


/** @lends BudConfig */
function BudConfig(config) {
    var s = this;
    s.config = fallbackCopy(BudConfig.defaults, config);
    s.validate();
}

BudConfig.prototype = {
    /**
     * Validate this configuration.
     */
    validate: function () {
        var s = this;

        function _assertType(value, types, msg) {
            assert(!!~types.indexOf(typeof(value)), msg);
        }

        _assertType(s.data, ['object', 'function'], 'config.data should be object or function.');
        _assertType(s.compiler, ['string', 'function'], 'config.compiler should be string or function.');
        _assertType(s.tmpl, ['string', 'function'], 'config.tmpl should be string or function.');
        _assertType(s.tmpl, ['string', 'function'], 'config.tmpl should be string or function.');
        _assertType(s.tmpl, ['object'], 'config.tmpl should be object or function.');
    }
};

/**
 * Default bud configuration.
 * @type {{}}
 */
BudConfig.defaults = {
    force: false,
    mode: '644',
    compiler: 'hbs',
    tmpl: 'text',
    data: {}
};


module.exports = BudConfig;