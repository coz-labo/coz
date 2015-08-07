/**
 * Test case for coz/lib/template/EngineSet.
 * Runs with nodeunit.
 */

var EngineSet = require('../../lib/template/engine_set.js');

exports['Define an engine.'] = function (test) {
    var engine = EngineSet._newEngineNamed({
        compile: function () {
        }
    }, 'foo');
    test.equal(engine.$name, 'foo');
    test.done();
};

exports['Register and resolve engines.'] = function (test) {
    var engineSet = new EngineSet();
    engineSet.registerEngine('foo', {
        $isEngine: true,
        $aliases: ['baz']
    });
    test.throws(function () {
        engineSet.registerEngine('foo', {
            $isEngine: true
        });
    }, 'Try to register duplicate name.');

    test.ok(engineSet.resolveEngine('foo'));
    test.ok(engineSet.resolveEngine('baz'));
    test.done();
};

