/**
 * Bud file logger.
 * @memberof module:coz/lib/bud
 * @inner
 * @constructor BudLogger
 */

"use strict";

var ext = require('../ext'),
    core = require('../core'),
    format = core.util.format,
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
 * Log about bud rendering.
 * @param {module:coz/lib/bud~Bud} bud - Bud to log.
 * @param {module:coz/lib/bud~logCallback} callback - Callback when done.
 */
BudLogger.prototype.logRendering = function (bud, callback) {
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

/**
 * Log about bud cleaning.
 * @param {module:coz/lib/bud~Bud} bud - Bud to log.
 * @param {module:coz/lib/bud~logCallback} callback - Callback when done.
 */
BudLogger.prototype.logClearing = function (bud, callback) {
    var s = this;
    [].concat(bud).forEach(function (bud) {
        if (bud.done) {
            return;
        }
        var cleaned = path.relative(process.cwd(), bud.path);
        s.debug('File cleaned:' + cleaned);
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

/**
 * Emit start log about task finished.
 * @param {string} name - Task name.
 * @param {Date} startDate - Date of started.
 */
BudLogger.prototype.infoStarted = function (name, startDate) {
    var s = this;
    var msg = format('[Coz] %s started...', name);
    s.info(msg);
};


/**
 * Emit info log about task finished.
 * @param {string} name - Task name.
 * @param {Date} startDate - Date of started.
 * @param {Date} endDate - Date of ended.
 */
BudLogger.prototype.infoFinished = function (name, startDate, endDate) {
    var s = this;
    var msg = format('...done!(%dms)', endDate - startDate);
    s.info(msg);
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