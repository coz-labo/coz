/**
 * Test case for file/is_dir.js
 * Runs with nodeunit
 */

"use strict";

var isDir = require('../../../lib/util/file/is_dir.js');

exports['Direct is dir'] = function (test) {
    isDir(__dirname, function (result) {
        test.equal(result, true);
        isDir('__not_existing', function (result2) {
            test.equal(result2, false);
            test.done();
        });
    });
};