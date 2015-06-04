/**
 * Test case for resolver.js
 * Runs with nodeunit.
 */

"use strict";

var Resolver = require('../../../lib/resolvers/resolver');

exports['Register data.'] = function (test) {
    var resolver = new Resolver({});
    resolver.register('foo', 'bar');
    resolver.registerAll({
        baz: 'quz'
    });
    test.done();
};