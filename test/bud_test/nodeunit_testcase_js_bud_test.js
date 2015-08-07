/**
 * Test case for module:coz/lib/bud/factory.nodeunitTestcaseJsBud
 * Runs with nodeunit.
 */

var nodeunitTestcaseJsBud = require('../../lib/bud/factory/nodeunit_testcase_js_bud.js');

exports['Nodeunit testcase js bud'] = function (test) {
    var bud = nodeunitTestcaseJsBud({
        src: __filename,
        dest: __dirname + '/../../tmp'
    });
    test.ok(bud);
    test.done();
};

