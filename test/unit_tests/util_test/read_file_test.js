/**
 * Test case for file/read_file.js
 * Runs with nodeunit.
 */

"use strict";

var readFile = require('../../../lib/util/file/read_file.js');

exports['Write a file.'] = function (test) {
    readFile(__filename, {}, function (err, content) {
        test.ok(content);
        test.ifError(err);
        test.done();
    });
};