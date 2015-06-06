/**
 * Utility functions for logging.
 * @module leaf/lib/util/logging
 * @property consoleLogger {object} - {@link module:leaf/lib/util/logging.consoleLogger|consoleLogger module}.
 */

"use strict";

module.exports = {
    get ConsoleLogger() { return require('./console_logger'); }
};