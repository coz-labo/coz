/**
 * Utility functions for logging.
 * @module coz/lib/util/logging
 */

"use strict";

module.exports = {
    /**
     * @see {@link module:coz/lib/util/logging~ConsoleLogger}
     */
    get ConsoleLogger() { return require('./console_logger'); }
};