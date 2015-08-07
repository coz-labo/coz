/**
 * Test case for core.js
 * Runs with nodeunit.
 */

"use strict";

var core = require('../lib/core');

exports['Evaluate all.'] = function (test) {
    Object.keys(core).forEach(function (key) {
        test.ok(core[key]);
    });
    test.done();
};

