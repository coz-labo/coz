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

exports['Check file exists.'] = function (test) {
    var resolver = new Resolver({});
    test.equal(resolver._fileExists(__filename), true);
    test.done();
};

exports['Resolve path.'] = function (test) {
    var resolver = new Resolver({});
    test.ok(resolver._resolvePath(__filename));
    test.done();
};

exports['Require safely.'] = function (test) {
    var resolver = new Resolver({});
    test.ok(!resolver._requireSafely("__not_existing"));
    test.ok(!!resolver._requireSafely(__filename));
    test.done();
};

exports['Try to resolve.'] = function (test) {
    var resolver = new Resolver({});
    test.throws(function () {
        resolver.resolve('foo');
    }, 'Throw not implemented error.');
    test.done();
};