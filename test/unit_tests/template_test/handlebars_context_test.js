/**
 * Test case for module:leaf/lib/template/contexts.HandlebarsContext
 * Runs with nodeunit.
 */

"use strict";

var HandlebarsContext = require('../../../lib/template/contexts/handlebars_context.js');


exports['Construct a context.'] = function (test) {
    var context = new HandlebarsContext({
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
    var context = new HandlebarsContext({});
    test.equal(context.camelcase('foo-bar'), 'fooBar');
    test.equal(context.snakecase('foo-bar'), 'foo_bar');
    test.done();
};

