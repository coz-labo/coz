/**
 * Utility functions for logging.
 * @module coz/lib/util/logging
 */

"use strict";

module.exports = {
    /**
     * @memberof module:coz/lib/util/logging
     * @name {@link module:coz/lib/util/logging~ConsoleLogger|ConsoleLogger}
     */
    get ConsoleLogger() { return require('./console_logger'); }
};