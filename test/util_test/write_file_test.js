/**
 * Test case for file/write_file.js
 * Runs with nodeunit.
 */

"use strict";


var writeFile = require('../../lib/util/file/write_file.js'),
    path = require('path');

var workDir = path.resolve(__dirname, '../../tmp');


exports['Write a file.'] = function (test) {
    var filename = path.resolve(workDir, 'work_file_test_file.txt');
    writeFile(filename, 'This is a test file.', {
        mkdirp: true,
        mode: '444'
    }, function (err) {
        test.ifError(err);
        writeFile(filename, 'This is a test file.', {
            force: true
        }, function (err) {
            test.ifError(err);

            writeFile(filename, 'This is a test file.', function (err) {
                test.ifError(err, 'Without any option.');
                test.done();
            });
        });
    });
};