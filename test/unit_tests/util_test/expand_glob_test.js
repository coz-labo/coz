/**
 * Test case for file/expand_glob.js
 * Runs with nodeunit
 */

"use strict";


var expandGlob = require('../../../lib/util/file/expand_glob.js'),
    fs = require('fs'),
    path = require('path');

var workDir = path.resolve(__dirname, '../../.work');


exports['Expand glob filename pattern.'] = function (test) {
    expandGlob(__dirname + '/**/*.js', function (err, filenames) {
        test.ifError(err);
        test.ok(filenames);
        test.done();
    });
};