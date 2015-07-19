/**
 * Test case for structJsBud.
 * Runs with nodeunit.
 */

var structJsBud = require('../../../lib/bud/factory/struct_js_bud.js');

exports['Struct js bud'] = function (test) {
    var bud = structJsBud({
        keys: ['foo', 'bar'],
        desc: 'Structure for bar baz',
        name: 'BarBaz',
        module: 'some'
    });
    test.ok(bud);
    test.done();
};

