/**
 * Test case for file/unlink_file.js
 * Runs with nodeunit
 */

"use strict";


var unlinkFile = require('../../../lib/util/file/unlink_file.js'),
    fs = require('fs'),
    path = require('path');

var workDir = path.resolve(__dirname, '../../.work');


exports['Write a file.'] = function (test) {
    var filename = path.resolve(workDir, 'work_file_to_unlink.txt');
    fs.writeFileSync(filename, 'foo');
    unlinkFile(filename, {
        mkdirp: true
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};