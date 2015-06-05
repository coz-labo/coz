/**
 * Test case for string/snakecase.js
 * Runs with nodeunit
 */

"use strict";

var snakecase = require('../../../lib/util/string/snakecase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(snakecase('fooBar'), 'foo_bar');
    test.equal(snakecase('foo_bar'), 'foo_bar');
    test.equal(snakecase('foo-bar'), 'foo_bar');
    test.equal(snakecase('foo.bar'), 'foo_bar');
    test.equal(snakecase('_bar_baz'), '_bar_baz');
    test.equal(snakecase('.bar_baz'), '_bar_baz');
    test.equal(snakecase(''), '');
    test.strictEqual(snakecase(null), 'null');
    test.strictEqual(snakecase(undefined), 'undefined');
    test.done();

};