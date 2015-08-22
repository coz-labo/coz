/**
 * Test case for eachBud.
 * Runs with nodeunit.
 */

var eachBud = require('../lib/each_bud.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Each bud'] = function(test){
    eachBud(__dirname + '/*.js', function (filename, callback) {
        callback(null);
    }, function (err) {
        test.ifError(err);
        test.done();
    });};

