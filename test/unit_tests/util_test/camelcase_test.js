/**
 * Test case for module:leaf/lib/string.camelcase
 * Runs with nodeunit
 */

"use strict";

var camelcase = require('../../../lib/util/string/camelcase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(camelcase('foo_bar'), 'fooBar');
    test.equal(camelcase('foo-bar'), 'fooBar');
    test.equal(camelcase('foo.bar'), 'fooBar');
    test.equal(camelcase('_bar_baz'), 'barBaz');
    test.equal(camelcase('.bar_baz'), 'barBaz');
    test.equal(camelcase(''), '');
    test.strictEqual(camelcase(null), 'null');
    test.strictEqual(camelcase(undefined), 'undefined');
    test.done();

};