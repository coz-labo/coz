/**
 * Leaf context.
 * @memberof module:leaf
 * @constructor Leaf
 */

"use strict";

var ext = require('./ext'),
    core = require('./core'),
    path = core.path,
    printing = require('./printing'),
    async = ext.async,
    file = require('./util/file'),
    bud = require('./bud'),
    BudLoader = require('./bud/bud_loader'),
    ConsoleLogger = require('./util/logging/console_logger'),
    Printer = printing.Printer,
    BudConfig = printing.BudConfig;

/** @lends Leaf */
function Leaf() {
    var s = this;
    s.init.apply(s, arguments);
}

Leaf.prototype = {

    // --------------------
    // Public properties.
    // --------------------

    /**
     * Initialize a leaf context.
     */
    init: function () {
        var s = this;
        s.logger = new ConsoleLogger({});
    },
    /**
     * Render bud files.
     * @param {string|string[]} filenames - Bud file name pattern.
     * @param {object} options - Optional settings.
     * @param {object} options.verbose - Log verbose.
     * @param {LeafCallback} callback - Callback when done.
     */
    render: function (filenames, options, callback) {
        var s = this;
        async.waterfall([
            function (callback) {
                file.expandGlob(filenames, callback);
            },
            function (filenames, callback) {
                async.eachSeries(filenames, function (filename, callback) {
                    s._print(filename, function (err, bud) {
                        if (!err) {
                            bud.forEach(function (bud) {
                                s._logBud(bud, options.verbose);
                            });
                        }
                        callback(err);
                    });
                }, callback);
            }
        ], callback);
    },

    // --------------------
    // Private properties.
    // --------------------
    /**
     * Log a bud.
     * @param {Bud} bud - Bud to log.
     * @param {boolean} verbose - Should verbose or not.
     * @private
     */
    _logBud: function (bud, verbose) {
        var s = this,
            written = bud.writtenLastTime();
        if (written) {
            var generated = path.relative(process.cwd(), bud.config.path);
            s.logger.debug('File generated:' + generated);
            if (verbose) {
                s.logger.trace(bud.config);
            }
        }
    },
    /**
     * Render a bud file.
     * @param {string} src - Source filename.
     * @param {function} callback - Callback when done.
     * @private
     */
    _print: function (src, callback) {
        var s = this;
        async.waterfall([
            function load(callback) {
                new BudLoader().load(src, callback);
            },
            function write(configs, callback) {
                async.concat([].concat(configs), function (config, callback) {
                    var printer = new Printer(config);
                    async.waterfall([
                        function prepare(callback) {
                            printer.prepare(callback);
                        },
                        function compile(printer, callback) {
                            printer.compile(callback);
                        },
                        function writeout(printer, callback) {
                            printer.writeout(callback);
                        },
                        function clean(printer, callback) {
                            callback(null, printer);
                        }
                    ], callback);
                }, callback);
            }
        ], function (err, printers) {
            callback(err, printers);
        });
    }
};

module.exports = Leaf;


/**
 * @callback LeafCallback
 */