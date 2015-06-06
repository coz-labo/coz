/**
 * Test case for module:leaf/lib/template.registerEngine
 * Runs with node unit.
 */

"use strict";

var registerEngine = require('../../../lib/template/register_engine.js');

exports['Register a new engine.'] = function (test) {
    registerEngine('foo', {
        compile: 'bar'
    });
    test.throws(function () {
        registerEngine('foo', {
            compile: 'bar'
        });
    });
    test.done();
};
