/**
 * Test case for module:leaf/lib/template/helpers.HandlebarsHelper
 * Runs with nodeunit.
 */

"use strict";

var HandlebarsHelper = require('../../../lib/template/helpers/handlebars_helper.js');


exports['Construct a helper.'] = function (test) {
    var helper = new HandlebarsHelper({
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
    var helper = new HandlebarsHelper({});
    test.equal(helper.camelcase('foo-bar'), 'fooBar');
    test.equal(helper.snakecase('foo-bar'), 'foo_bar');
    test.done();
};

