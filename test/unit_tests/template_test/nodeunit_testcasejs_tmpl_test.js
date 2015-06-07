/**
 * Test case for module:coz/lib/template/tmpls.nodeunitTestcasejsTmpl
 * Runs with nodeunit.
 */

var nodeunitTestcasejsTmpl = require('../../../lib/template/buildin_tmpls/nodeunit_testcasejs_tmpl.js');

exports['Nodeunit testcasejs tmpl'] = function (test) {
    test.ok(nodeunitTestcasejsTmpl({foo: 'bar'}));
    test.done();
};

