/**
 * Test case for file/unlink_file.js
 * Runs with nodeunit.
 */

"use strict";


var unlinkFile = require('../../lib/util/file/unlink_file.js'),
    fs = require('fs'),
    path = require('path');

var workDir = path.resolve(__dirname, '../../tmp');


exports['Unlink a file.'] = function (test) {
    var filename = path.resolve(workDir, 'work_file_to_unlink.txt');
    fs.writeFileSync(filename, 'foo');
    unlinkFile(filename, {
        force: true
    }, function (err) {
        test.ifError(err);
        unlinkFile(filename, function (err) {
            test.ifError(err);
            test.done();
        });
    });
};

exports['Try to delete dir.'] = function (test) {
    var dirname = path.resolve(workDir, 'work_dir_to_unlink');
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
    unlinkFile(dirname, function (err) {
        test.ok(!!err, 'Failed to unlink dir.');
        test.done();
    });
};