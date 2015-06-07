/**
 * Bud file logger.
 * @memberof module:coz/lib/bud
 * @inner
 * @constructor BudLogger
 */

"use strict";

var ext = require('../ext'),
    core = require('../core'),
    path = core.path,
    async = ext.async;

var ConsoleLogger = require('../../lib/util/logging/console_logger');

/** @lends module:coz/lib/bud~BudLogger */
function BudLogger(verbose) {
    var s = this;
    s.verbose = verbose;
}

BudLogger.prototype = new ConsoleLogger();

/**
 * Log a bud.
 * @param {module:coz/lib/bud~Bud} bud - Bud to log.
 * @param {module:coz/lib/bud~logCallback} callback - Callback when done.
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
 * @memberof module:coz/lib/bud
 * @inner
 * @callback logCallback
 * @param {?Error} error - Render error.
 * @param {module:coz/lib/bud~Bud} bud - Logged bud.
 */