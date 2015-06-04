/**
 * Bud configuration.
 * @constructor BudConfig
 * @memberof module:planter/lib/bud
 * @param {object} config - Configuration values.
 * @param {string|function} [config.engine='handlebarsEngine'] - Template compile function or name of function.
 * @param {object} - [config.data={}] - Rendering values.
 * @param {object} - [config.helpers={}] - Rendering helpers.
 * @param {boolean} [config.force=false] - Force to write or not.
 * @param {string|number} [config.mode='644'] - File permission.
 * @param {!string} config.path - File path to render.
 * @param {string|function} [config.tmpl='jsonTmpl'] - Template file path or template function.
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

        _assertType(s.engine, ['string', 'function'], 'config.engine should be string or function.');
        _assertType(s.data, ['object'], 'config.data should be object or function.');
        _assertType(s.helpers, ['object'], 'config.helpers should be object.');
        _assertType(s.force, ['boolean', 'number'], 'config.force should be boolean for number.');
        _assertType(s.path, ['string'], 'config.path should be string.');
        _assertType(s.mkdirp, ['boolean', 'number'], 'config.mkdirp should be boolean for number.');
        _assertType(s.mode, ['string', 'number'], 'config.mode should be string or number.');
        _assertType(s.tmpl, ['string', 'function'], 'config.tmpl should be string or function.');
    }
};

/**
 * Default bud configuration.
 * @type {{}}
 */
BudConfig.defaults = {
    engine: 'handlebars',
    data: {},
    force: false,
    helpers: {},
    mkdirp: false,
    mode: '644',
    path: undefined,
    tmpl: 'json'
};


module.exports = BudConfig;