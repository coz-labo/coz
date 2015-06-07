/**
 * Bud file logger.
 * @memberof coz/lib/bu
 * @constructor BudLogger
 */

"use strict";

var ext = require('../ext'),
    core = require('../core'),
    path = core.path,
    async = ext.async;

var ConsoleLogger = require('../../lib/util/logging/console_logger');

/** @lends BudLogger */
function BudLogger(verbose) {
    var s = this;
    s.verbose = verbose;
}

BudLogger.prototype = new ConsoleLogger();

/**
 * Log a bud.
 * @param {bud} bud - Bud to log.
 * @param {budLoggerLogCallback} callback - Callback when done.
 */
BudLogger.prototype.log = function (bud, callback) {
    var s = this;
    [].concat(bud).forEach(function (bud) {
        if (!bud.at) {
            return;
        }
        var generated = path.relative(process.cwd(), bud.path);
        s.debug('File generated:' + generated);
        if (s.verbose) {
            s.trace({
                src: bud.src,
                path: bud.path,
                force: bud.force,
                mode: bud.mode
            });
        }
    });
    callback(null, bud);
};

module.exports = BudLogger;

/**
 * Callback for bud log.
 * @memberof coz/lib/bud
 * @callback budLoggerLogCallback
 * @param {Error|null} error - Render error.
 * @param {Bud} bud - Logged bud.
 */