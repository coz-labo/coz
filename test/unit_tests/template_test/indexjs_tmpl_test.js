/**
 * Test case for module:coz/lib/template/tmpls.indexjsTmpl
 * Runs with nodeunit.
 */

var indexjsTmpl = require('../../../lib/template/buildin_tmpls/indexjs_tmpl.js');

exports['Indexjs tmpl'] = function (test) {
    test.ok(indexjsTmpl({
        module: 'foo',
        parentmodule: 'bar',
        modules: [
            {
                name: 'bazz',
                isSubmodules: false
            },
            {
                name: 'quzz',
                isSubmodules: true
            }
        ]
    }));
    test.ok(indexjsTmpl({
        desc: 'foo',
        modules: [
            {
                name: 'baz',
                isSubmodules: false
            },
            {
                name: 'quz',
                isSubmodules: true
            }
        ],
        docProperties: true
    }));
    test.done();
};

