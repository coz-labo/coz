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
    bud = require('./bud'),
    EngineSet = require('./template/engine_set'),
    BudLoader = bud.BudLoader,
    BudCompiler = bud.BudCompiler,
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
     * @type module:coz/lib/template~EngineSet
     */
    engineSet: undefined,
    /**
     * Render bud files.
     * @param {string|string[]} filenames - Bud file name pattern.
     * @param {object} [options] - Optional settings.
     * @param {boolean} [options.verbose=false] - Log verbose.
     * @param {module:coz~renderCallback} callback - Callback when done.
     */
    render: function (filenames, options, callback) {

        switch (typeof(arguments[1])) {
            case 'function':
                callback = callback || arguments[1];
                options = null;
                break;
        }
        options = options || {};

        var s = this;

        var startAt = new Date();
        var verbose = options.verbose;

        var logger = new BudLogger(!!verbose),
            loader = new BudLoader(),
            compiler = new BudCompiler({
                engineSet: s.engineSet
            }),
            writer = new BudWriter();

        logger.info('[Coz] Rendering started...');
        async.waterfall([
            function (callback) {
                file.expandGlob(filenames, callback);
            },
            function (filenames, callback) {
                async.eachSeries(filenames, function (filename, callback) {
                    async.waterfall([
                        function load(callback) {
                            loader.load(filename, callback);
                        },
                        function compile(bud, callback) {
                            compiler.compile(bud, callback);
                        },
                        function write(bud, callback) {
                            writer.write(bud, callback);
                        },
                        function log(bud, callback) {
                            logger.log(bud, callback);
                        }
                    ], callback);
                }, callback);
            }
        ], function (err) {
            logger.info('...done!(' + (new Date() - startAt) + 'ms)');
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