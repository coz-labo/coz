/**
 * Test case for module:coz/lib/bud/factory.indexJsBud
 * Runs with nodeunit.
 */

var indexJsBud = require('../../../lib/bud/factory/index_js_bud.js');

exports['Index js bud'] = function (test) {
    var bud = indexJsBud({
        dirname: __dirname
    });
    test.ok(bud);
    test.done();
};

exports['Data functions.'] = function (test) {
    test.equal(indexJsBud._isModule({}), true);
    test.equal(indexJsBud._isPascal(null, 'foo/bar.js', 'bar'), false);
    test.equal(indexJsBud._isPascal('bar.*', 'foo/bar.js', 'bar'), true);
    test.equal(indexJsBud._isPascal('bar', 'foo/bar.js', 'bar'), true);
    test.done();
};