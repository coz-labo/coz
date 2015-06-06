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
    EngineSet = require('./template/engine_set'),
    BudLoader = require('./bud/bud_loader'),
    BudCompiler = require('./bud/bud_compiler'),
    BudWriter = require('./bud/bud_writer'),
    BudLogger = require('./bud/bud_logger');

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
        s.engineSet = new EngineSet();
    },
    /**
     * Render bud files.
     * @param {string|string[]} filenames - Bud file name pattern.
     * @param {object} options - Optional settings.
     * @param {boolean} options.verbose - Log verbose.
     * @param {leafRenderCallback} callback - Callback when done.
     */
    render: function (filenames, options, callback) {
        var s = this;

        var logger = new BudLogger(!!options.verbose),
            loader = new BudLoader(),
            compiler = new BudCompiler({
                engineSet: s.engineSet
            }),
            writer = new BudWriter();

        async.waterfall([
            function (callback) {
                file.expandGlob(filenames, callback);
            },
            function (filenames, callback) {
                async.each(filenames, function (src, callback) {
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
        ], callback);
    }

};

module.exports = Leaf;


/**
 * @callback leafRenderCallback
 * @param {Error|null} error - Render error.
 */