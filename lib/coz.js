/**
 * Coz context.
 * @memberof module:coz
 * @inner
 * @constructor Coz
 */

"use strict";
var ext = require('./ext'),
    core = require('./core'),
    path = core.path,
    async = ext.async,
    file = require('./util/file'),
    flow = require('./util/flow'),
    bud = require('./bud'),
    EngineSet = require('./template/engine_set'),
    BudLoader = bud.BudLoader,
    BudCompiler = bud.BudCompiler,
    BudRemover = bud.BudRemover,
    BudWriter = bud.BudWriter,
    BudLogger = bud.BudLogger;

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
     */
    init: function () {
        var s = this;
        s.engineSet = new EngineSet();
        return s;
    },
    /**
     * @type {module:coz/lib/template~EngineSet}
     */
    engineSet: undefined,
    /**
     * Render files from bud.
     * @param {string|string[]} patterns - Bud file name patterns.
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

        var logger = new BudLogger(!!verbose),
            loader = new BudLoader(),
            compiler = new BudCompiler({
                engineSet: s.engineSet
            }),
            writer = new BudWriter();

        logger.infoStarted(name, startAt);
        flow.eachFiles(patterns, function (filename, callback) {
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
        }, function (err) {
            logger.infoFinished(name, startAt, new Date());
            callback = callback || s._handleError.bind(s);
            callback(err);
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

        var logger = new BudLogger(!!verbose),
            loader = new BudLoader(),
            remover = new BudRemover();

        logger.infoStarted(name, startAt);
        flow.eachFiles(patterns, function (filename, callback) {
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