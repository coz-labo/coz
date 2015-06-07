/**
 * Test case for lowercase.
 * Runs with nodeunit.
 */

var lowercase = require('../../../lib/util/string/lowercase.js');

exports['Lowercase'] = function (test) {
    test.equal(lowercase(""), "");
    test.equal(lowercase("Foo"), "foo");
    test.done();
};

