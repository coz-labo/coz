/**
 * Test case for module:coz/lib/bud/BudLogger
 * Runs with nodeunit.
 */

var BudLogger = require('../../../lib/bud/bud_logger.js');

var log;
exports.setUp = function (done) {
    log = console.log;
    console.log = function () {
    };
    done();
};
exports.tearDown = function (done) {
    console.log = log;
    done()
};

exports['Bud logger'] = function (test) {
    var logger = new BudLogger(true);
    test.ok(logger);
    logger.log({
        at: new Date(),
        path: __filename
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

