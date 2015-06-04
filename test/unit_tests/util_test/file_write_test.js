/**
 * Test case for file/write_file.js
 * Runs with nodeunit
 */

"use strict";


var writeFile = require('../../../lib/util/file/write_file.js'),
    path = require('path');

var workDir = path.resolve(__dirname, '../../.work');


exports['Write a file.'] = function (test) {
    var filename = path.resolve(workDir, 'work_file_test_file.txt');
    writeFile(filename, 'This is a test file.', {
        mkdirp: true
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};