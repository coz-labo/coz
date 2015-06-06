/**
 * Test case for module:leaf/lib/string.capitalcase
 * Runs with nodeunit
 */

"use strict";

var capitalcase = require('../../../lib/util/string/capitalcase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(capitalcase('fooBar'), 'FooBar');
    test.done();

};