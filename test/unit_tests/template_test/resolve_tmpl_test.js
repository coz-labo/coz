/**
 * Test case for module:leaf/lib/template/resolveTmpl
 * Runs with nodeunit.
 */

"use strict";

var resolveTmpl = require('../../../lib/template/resolve_tmpl.js');

exports['Resolve a tmpl.'] = function (test) {
    test.ok(resolveTmpl('indexjs'));
    test.ok(resolveTmpl('Indexjs'));
    test.ok(resolveTmpl('indexjsTmpl'));
    test.done();
};
