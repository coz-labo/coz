/**
 * Test case for module:leaf/lib/template/contexts.Context
 * Runs with nodeunit.
 */

"use strict";

var Context = require('../../../lib/template/contexts/context.js');


exports['Construct a context.'] = function (test) {
    var context = new Context({
        foo: 'bar'
    });
    test.equal(context.foo, 'bar');
    context.set('foo', 'baz');
    test.equal(context.foo, 'baz');
    context.set({'foo': 'quz'});
    test.equal(context.foo, 'quz');
    test.equal(context.clone().foo, 'quz');
    test.done();
};

exports['Help templating.'] = function (test) {
    var context = new Context({});
    test.equal(context.camelcase('foo-bar'), 'fooBar');
    test.equal(context.snakecase('foo-bar'), 'foo_bar');
    test.done();
};

exports['Define a constructor.'] = function (test) {
    var Defined = Context.define({
        foo: 'bar'
    });
    test.equal(new Defined().foo, 'bar');
    test.done();
};
