/**
 * Test case for module:leaf/lib/template/resolveEngine
 * Runs with nodeunit.
 */

"use strict";

var resolveEngine = require('../../../lib/template/resolve_engine.js');

exports['Resolve a engine.'] = function (test) {
    test.ok(resolveEngine('handlebars'));
    test.ok(resolveEngine('Handlebars'));
    test.ok(resolveEngine('handlebarsEngine'));
    test.ok(resolveEngine('HandlebarsEngine'));
    test.done();
};
