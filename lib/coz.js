/**
 * Coz context.
 * @memberof module:coz
 * @inner
 * @constructor Coz
 * @param {object} [config] - Coz configuration.
 */

"use strict";
var path = require('path'),
    async = require('async'),
    eachBud = require('./each_bud'),
    EngineSet = require('./template/engine_set'),
    TmplSet = require('./template/tmpl_set'),
    cozLogger = require('coz-logger'),
    cozBudLoader = require('coz-bud-loader'),
    cozBudWriter = require('coz-bud-writer'),
    cozBudRemover = require('coz-bud-remover'),
    cozBudCompiler = require('coz-bud-compiler'),
    _requireSafely = require('./_require_safely');

function _parseConfig(config) {
    return _requireSafely(config) || config || {};
}

/** @lends module:coz~Coz */
function Coz() {
    var s = this;
    s.init.apply(s, arguments);
}

Coz.prototype = {
    // --------------------
    // Public properties.
    // --------------------

    /**
     * Initialize a coz context.
     * @constructs module:coz~Coz
     * @param {object} [config] - Coz configuration.
     * @param {object|string} [config.engines] - Rendering engine or it's module file path.
     * @param {object} [config.tmpls] - Predefined templates.
     */
    init: function (config) {
        var s = this;
        config = _parseConfig(config) || {};

        s.engineSet = new EngineSet(_parseConfig(config.engines) || _parseConfig(config.engine));
        s.tmplSet = new TmplSet(_parseConfig(config.tmpls));
        return s;
    },
    /**
     * @type {module:coz/lib/template~EngineSet}
     */
    engineSet: undefined,
    /**
     * Render files from bud.
     * @param {string|string[]|object|object[]} patterns - Bud file name patterns, or bud instance.
     * @param {object} [options] - Optional settings.
     * @param {boolean} [options.verbose=false] - Log verbose.
     * @param {module:coz~renderCallback} callback - Callback when done.
     */
    render: function (patterns, options, callback) {
        switch (typeof(arguments[1])) {
            case 'function':
                callback = callback || arguments[1];
                options = null;
                break;
        }
        options = options || {};

        var s = this;

        var name = 'Rendering',
            startAt = new Date(),
            verbose = !!options.verbose;

        var logger = cozLogger(!!verbose),
            loader = cozBudLoader({}),
            compiler = cozBudCompiler({
                resolveEngine: s.engineSet.resolveEngine.bind(s.engineSet),
                resolveTmpl: s.tmplSet.resolveTmpl.bind(s.tmplSet)
            }),
            writer = cozBudWriter({});

        logger.infoStarted(name, startAt);
        eachBud(patterns, function (filename, callback) {
            async.waterfall([
                function (callback) {
                    callback(null, filename);
                },
                function load(bud, callback) {
                    loader.load(bud, callback);
                },
                function compile(bud, callback) {
                    compiler.compile(bud, callback);
                },
                function write(bud, callback) {
                    writer.write(bud, callback);
                },
                function log(bud, callback) {
                    logger.logRendering(bud, callback);
                }
            ], callback);
        }, function (err, bud) {
            logger.infoFinished(name, startAt, new Date());
            callback = callback || s._handleError.bind(s);
            callback.call(bud, err);
        });
    },
    /**
     * Clean files from bud.
     * @param {string|string[]} patterns - Bud file names.
     * @param {object} [options] - Optional settings.
     * @param {boolean} [options.verbose=false] - Log verbose.
     * @param {cleanCallback} callback - Callback when done.
     */
    clean: function (patterns, options, callback) {

        switch (typeof(arguments[1])) {
            case 'function':
                callback = callback || arguments[1];
                options = null;
                break;
        }
        options = options || {};

        var s = this;

        var name = 'Clearing',
            startAt = new Date(),
            verbose = !!options.verbose;

        var logger = cozLogger(!!verbose),
            loader = cozBudLoader({}),
            remover = cozBudRemover({});

        logger.infoStarted(name, startAt);
        eachBud(patterns, function (filename, callback) {
            async.waterfall([
                function (callback) {
                    callback(null, filename);
                },
                function load(bud, callback) {
                    loader.load(bud, callback);
                },
                function remove(bud, callback) {
                    remover.remove(bud, callback);
                },
                function log(bud, callback) {
                    logger.logClearing(bud, callback);
                }
            ], callback);
        }, function (err) {
            logger.infoFinished(name, startAt, new Date());
            callback = callback || s._handleError.bind(s);
            callback(err);
        });
    },
    /**
     * Handle an error.
     * @param {?Error} err - Error to handle.
     * @private
     */
    _handleError: function (err) {
        if (err) {
            console.error(err);
        }
    }
};


module.exports = Coz;


/**
 * Callback for coz render.
 * @memberof module:coz
 * @inner
 * @callback renderCallback
 * @param {?Error} error - Render error.
 */

/**
 * Callback for coz render.
 * @memberof module:coz
 * @inner
 * @callback cleanCallback
 * @param {?Error} error - Clean error.
 */