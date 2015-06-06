/**
 * Leaf context.
 * @memberof module:leaf
 * @constructor Leaf
 */

"use strict";

var ext = require('./ext'),
    core = require('./core'),
    path = core.path,
    async = ext.async,
    file = require('./util/file'),
    bud = require('./bud'),
    BudLoader = require('./bud/bud_loader'),
    BudCompiler = require('./bud/bud_compiler'),
    BudWriter = require('./bud/bud_writer'),
    ConsoleLogger = require('./util/logging/console_logger');

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
        s.loader = new BudLoader();
        s.compiler = new BudCompiler();
        s.writer = new BudWriter();
    },
    /**
     * Render bud files.
     * @param {string|string[]} filenames - Bud file name pattern.
     * @param {object} options - Optional settings.
     * @param {object} options.verbose - Log verbose.
     * @param {LeafCallback} callback - Callback when done.
     */
    render: function (filenames, options, callback) {
        var s = this,
            verbose = !!options.verbose;
        async.waterfall([
            function (callback) {
                file.expandGlob(filenames, callback);
            },
            function (filenames, callback) {
                async.each(filenames, function (src, callback) {


                    async.waterfall([
                        function load(callback) {
                            s.loader.load(src, callback);
                        },
                        function compile(bud, callback) {
                            s.compiler.compile(bud, callback);
                        },
                        function write(bud, callback) {
                            s.writer.write(bud, callback);
                        },
                        function log(bud, callback) {
                            [].concat(bud).forEach(function (bud) {
                                if (!bud.at) {
                                    return;
                                }
                                var generated = path.relative(process.cwd(), bud.path);
                                s.logger.debug('File generated:' + generated);
                                if (verbose) {
                                    s.logger.trace({
                                        src: bud.src,
                                        path: bud.path,
                                        force: bud.force,
                                        mode: bud.mode
                                    });
                                }
                            });
                            callback(null);
                        }
                    ], callback);
                }, callback);
            }
        ], callback);
    }

};

module.exports = Leaf;


/**
 * @callback LeafCallback
 */