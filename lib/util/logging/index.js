/**
 * Utility functions for logging.
 * @module coz/lib/util/logging
 * @property consoleLogger {object} - {@link coz/lib/util/logging.consoleLogger|consoleLogger module}.
 */

"use strict";

module.exports = {
    get ConsoleLogger() { return require('./console_logger'); }
};