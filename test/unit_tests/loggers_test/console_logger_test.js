/**
 * Test case for file/console_logger.js
 * Runs with nodeunit.
 */

"use strict";

var ConsoleLogger = require('../../../lib/loggers/console_logger.js');

var log = console.log, error = console.error;
exports.setUp = function (done) {
    console.error = console.log = function () {
    };
    done();
};
exports.tearDown = function (done) {
    console.log = log;
    console.error = error;
    done();
};

exports['Log messages.'] = function (test) {
    var logger = new ConsoleLogger();
    logger.info('foo');
    logger.debug('foo');
    logger.trace('foo', {bar: 'baz'});
    logger.error('foo');
    logger.fatal('foo');
    test.done();
};
