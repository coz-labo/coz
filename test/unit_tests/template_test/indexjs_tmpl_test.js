/**
 * Test case for module:coz/lib/template/tmpls.indexjsTmpl
 * Runs with nodeunit.
 */

var indexjsTmpl = require('../../../lib/template/buildin_tmpls/indexjs_tmpl.js');

exports['Indexjs tmpl'] = function (test) {
    test.ok(indexjsTmpl({
        docProperties: false,
        doc: {},
        modules: [
            {
                isPascal: false,
                name: 'bazz',
                isModule: false
            },
            {
                isPascal: true,
                name: 'quzz',
                isModule: true
            }
        ]
    }));
    test.ok(indexjsTmpl({
        desc: 'foo',
        doc: {
            "module": "foo"
        },
        modules: [
            {
                isPascal: true,
                name: 'baz',
                isModule: false
            },
            {
                isPascal: false,
                name: 'quz',
                isModule: true
            }
        ],
        docProperties: true
    }));
    test.done();
};

