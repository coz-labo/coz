/**
 * Test case for tmplSet.
 * Runs with nodeunit.
 */

var TmplSet = require('../../lib/template/tmpl_set.js');

exports['Register and resolve tmpls.'] = function (test) {
    var tmplSet = new TmplSet();
    tmplSet.registerTmpl('foo', function () {
    });
    test.throws(function () {
        tmplSet.registerTmpl('foo', function () {
        });
    }, 'Try to register duplicate name');
    test.ok(tmplSet.resolveTmpl(function () {
    }));
    test.ok(tmplSet.resolveTmpl('foo'));
    test.done();
};

