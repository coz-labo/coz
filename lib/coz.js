/**
 * Coz context.
 * @memberof module:coz
 * @inner
 * @constructor Coz
 * @param {object} [config] - Coz configuration.
 */

"use strict";
var ext = require('./ext'),
    core = require('./core'),
    path = core.path,
    async = ext.async,
    file = require('./util/file'),
    flow = require('./util/flow'),
    requiring = require('./util/requiring'),
    bud = require('./bud'),
    EngineSet = require('./template/engine_set'),
    TmplSet = require('./template/tmpl_set'),
    BudLoader = bud.BudLoader,
    BudCompiler = bud.BudCompiler,
    BudRemover = bud.BudRemover,
    BudWriter = bud.BudWriter,
    BudLogger = bud.BudLogger,
    requireSafely = requiring.requireSafely;

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
        config = requireSafely(config) || config || {};

        s.engineSet = new EngineSet(
            requireSafely(config.engines) || config.engines || requireSafely(config.engine) || config.engine
        );
        s.tmplSet = new TmplSet(
            requireSafely(config.tmpls) || config.tmpls
        );
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

        var logger = new BudLogger(!!verbose),
            loader = new BudLoader(),
            compiler = new BudCompiler({
                engineSet: s.engineSet,
                tmplSet: s.tmplSet
            }),
            writer = new BudWriter();

        logger.infoStarted(name, startAt);
        Coz._eachBud(patterns, function (filename, callback) {
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
        Coz._eachBud(patterns, function (filename, callback) {
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


Coz._eachBud = function (pattern, handler, callback) {
    async.concat([].concat(pattern), function (pattern, callback) {
        switch (typeof(pattern)) {
            case 'object':
                var bud = pattern; //Actually a bud.
                var parent = module.parent;
                bud.cwd = bud.cwd || (parent && path.dirname(parent.filename)) || __dirname;
                handler(bud, callback);
                break;
            default:
                flow.eachFiles([].concat(pattern), handler, callback);
                break;
        }
    }, callback);
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