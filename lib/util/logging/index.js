/**
 * Utility functions for logging.
 * @module coz/lib/util/logging
 * @see module:coz/lib/util
 */

"use strict";

module.exports = {
    /**
     * @memberof module:coz/lib/util/logging
     * @name {@link module:coz/lib/util/logging~ConsoleLogger|ConsoleLogger}
     */
    get ConsoleLogger() { return require('./console_logger'); }
};