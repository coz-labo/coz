/**
 * Test case for structjsTmpl.
 * Runs with nodeunit.
 */

var structjsTmpl = require('../../../lib/template/buildin_tmpls/structjs_tmpl.js');

exports['Structjs tmpl'] = function (test) {
    var rendered = structjsTmpl({
        keys: ['foo', 'bar'],
        desc: 'Structure for bar baz',
        name: 'BarBaz',
        module: 'some'
    });
    test.ok(rendered);
    test.done();
};

