/**
 * Coz context.
 * @memberof module:coz
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

/** @lends Coz */
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
    },
    /**
     * Render bud files.
     * @param {string|string[]} filenames - Bud file name pattern.
     * @param {object} options - Optional settings.
     * @param {boolean} options.verbose - Log verbose.
     * @param {cozRenderCallback} callback - Callback when done.
     */
    render: function (filenames, options, callback) {
        var s = this;

        var startAt = new Date();
        var verbose = options.verbose;

        var logger = new BudLogger(!!verbose),
            loader = new BudLoader(),
            compiler = new BudCompiler({
                engineSet: s.engineSet
            }),
            writer = new BudWriter();

        logger.info('[Coz] Render start...');
        async.waterfall([
            function (callback) {
                file.expandGlob(filenames, callback);
            },
            function (filenames, callback) {
                async.eachSeries(filenames, function (src, callback) {
                    async.waterfall([
                        function load(callback) {
                            loader.load(src, callback);
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
     * @param {Error} err - Error to handle.
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
 * @callback cozRenderCallback
 * @param {Error|null} error - Render error.
 */