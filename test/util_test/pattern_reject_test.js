/**
 * Test case for module:coz/lib/util/filtering.patternReject
 * Runs with nodeunit
 */

"use strict";

var patternReject = require('../../lib/util/filtering/pattern_reject.js');

exports['Sort string.'] = function (test) {
    var filter = patternReject(/^__/);
    test.ok(filter('foo'));
    test.ok(!filter('__foo'));
    test.throws(function () {
        [1, 2, 3].filter(patternReject);
    });
    test.done();
};