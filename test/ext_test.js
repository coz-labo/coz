/**
 * Test case for module:coz/lib/ext
 * Runs with nodeunit.
 */

"use strict";

var ext = require('../lib/ext');

exports['Evaluate all.'] = function (test) {
    Object.keys(ext).forEach(function (key) {
        test.ok(ext[key]);
    });
    test.done();
};

