/**
 * Test case for engine_resolver.js
 * Runs with nodeunit.
 */

"use strict";

var EngineResolver = require('../../../lib/resolvers/engine_resolver');

exports['Register data.'] = function (test) {
    var resolver = new EngineResolver({});
    resolver.register('foo', 'bar');
    resolver.registerAll({
        bazEngine: 'quz'
    });
    test.equal(resolver.resolve('foo'), 'bar');
    test.equal(resolver.resolve('baz'), 'quz');
    test.equal(resolver.resolve('bazEngine'), 'quz');
    test.done();
};