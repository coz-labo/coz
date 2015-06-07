/**
 * Test case for uppercase.
 * Runs with nodeunit.
 */

var uppercase = require('../../../lib/util/string/uppercase.js');

exports['Uppercase'] = function (test) {
    test.equal(uppercase(""), "");
    test.equal(uppercase("foo"), "FOO");
    test.done();
};

