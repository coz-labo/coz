/**
 * Testcase for file/expand_glob.js
 * Runs with nodeunit.
 */

"use strict";


var expandGlob = require('../../../lib/util/file/expand_glob.js');

var warn = console.warn;

exports.setUp = function (done) {
    console.warn = function () {
    };
    done()
};

exports.tearDown = function (done) {
    console.warn = warn;
    done();
};

exports['Expand glob filename pattern.'] = function (test) {
    expandGlob(__dirname + '/**/*.js', function (err, filenames) {
        test.ifError(err);
        test.ok(filenames);
        test.done();
    });
};

exports['Expand invalid.'] = function (test) {
    expandGlob("__not_existing", function (err) {
        test.ifError(err);
        expandGlob(null, function (err) {
            test.ifError(err);
            test.done();
        });
    });
};

exports['Expand sync.'] = function (test) {
    var filenames = expandGlob.sync([
        __dirname + '/*.*'
    ], {});
    test.ok(filenames.length > 0);
    test.done();
};