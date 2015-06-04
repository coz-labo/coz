/**
 * Test case for helper_resolver.js
 * Runs with nodeunit.
 */

"use strict";

var HelperResolver = require('../../../lib/resolvers/helper_resolver');

exports['Register data.'] = function (test) {
    var resolver = new HelperResolver({});
    resolver.register('foo', 'bar');
    resolver.registerAll({
        bazHelper: 'quz'
    });
    test.equal(resolver.resolve('foo'), 'bar');
    test.equal(resolver.resolve('baz'), 'quz');
    test.equal(resolver.resolve('bazHelper'), 'quz');
    test.done();
};