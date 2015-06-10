/**
 * Test case for eachFiles.
 * Runs with nodeunit.
 */

var eachFiles = require('../../../lib/util/flow/each_files.js');

exports['Each files'] = function (test) {
    eachFiles(__dirname + '/*.js', function (filename, callback) {
        callback(null);
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

