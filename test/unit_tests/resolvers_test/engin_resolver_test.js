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
    test.equal(resolver.resolve(0), null);
    test.equal(resolver.resolve('__invalid_name__'), null);
    test.equal(resolver.resolve(null), null);
    test.ok(resolver.resolve(function () {
        return 'bar';
    }));
    test.ok(resolver.resolve(__filename));
    test.done();
};