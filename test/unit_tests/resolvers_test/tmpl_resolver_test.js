/**
 * Test case for engine_resolver.js
 * Runs with nodeunit.
 */

"use strict";

var TmplResolver = require('../../../lib/resolvers/tmpl_resolver');

exports['Register data.'] = function (test) {
    var resolver = new TmplResolver({});
    resolver.register('foo', 'bar');
    resolver.registerAll({
        bazTmpl: 'quz'
    });
    test.equal(resolver.resolve('foo'), 'bar');
    test.equal(resolver.resolve('baz'), 'quz');
    test.equal(resolver.resolve('bazTmpl'), 'quz');
    test.done();
};