/**
 * Test case for EngineSet.
 * Runs with nodeunit.
 */

var EngineSet = require('../lib/engine_set.js');

exports['Define an engine.'] = function (test) {
    var engine = EngineSet._newEngine({
        compile: function () {
        }
    }, 'foo');
    test.done();
};

exports['Register and resolve engines.'] = function (test) {
    var engineSet = new EngineSet();
    engineSet.registerEngine('foo', {
        compile: function () {
        }
    });
    test.throws(function () {
        engineSet.registerEngine('foo', {
            $isEngine: true
        });
    }, 'Try to register duplicate name.');

    test.ok(engineSet.resolveEngine('foo'));
    test.done();
};

