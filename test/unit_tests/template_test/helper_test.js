/**
 * Test case for module:leaf/lib/template/helpers.Helper
 * Runs with nodeunit.
 */

"use strict";

var Helper = require('../../../lib/template/helpers/helper.js');


exports['Construct a helper.'] = function (test) {
    var helper = new Helper({
        foo: 'bar'
    });
    test.equal(helper.foo, 'bar');
    helper.set('foo', 'baz');
    test.equal(helper.foo, 'baz');
    helper.set({'foo': 'quz'});
    test.equal(helper.foo, 'quz');
    test.equal(helper.clone().foo, 'quz');
    test.done();
};

exports['Help templating.'] = function (test) {
    var helper = new Helper({});
    test.equal(helper.camelcase('foo-bar'), 'fooBar');
    test.equal(helper.snakecase('foo-bar'), 'foo_bar');
    test.done();
};

exports['Define a constructor.'] = function (test) {
    var Defined = Helper.define({
        foo: 'bar'
    });
    test.equal(new Defined().foo, 'bar');
    test.done();
};
