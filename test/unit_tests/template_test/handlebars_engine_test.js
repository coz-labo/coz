/**
 * Test case for module:leaf/lib/template/buildinEngines.HandlebarsEngine
 * Runs with nodeunit.
 */

"use strict";

var HandlebarsEngine = require('../../../lib/template/buildin_engines/handlebars_engine.js');


exports['Construct a engine.'] = function (test) {
    var engine = new HandlebarsEngine({});
    engine.set('foo', 'baz');
    test.equal(engine.foo, 'baz');
    engine.set({'foo': 'quz'});
    test.equal(engine.foo, 'quz');
    test.equal(engine.get('foo'), 'quz');
    test.equal(engine.clone().foo, 'quz');
    test.done();
};

exports['Register helpers.'] = function (test) {
    var helper01 = function () {
    };
    var engine = new HandlebarsEngine({
        helpers: {
            foo: helper01
        }
    });
    engine.registerHelper('bar', helper01);
    engine.registerHelpers({baz: helper01});
    test.ok(engine.helpers);
    test.ok(engine.helpers.foo);
    test.ok(engine.helpers.bar);
    test.ok(engine.helpers.baz);
    test.done();
};

exports['Compile template.'] = function (test) {
    var engine = new HandlebarsEngine({});
    engine.compile('Here are {{lowercase name}}.', function (err, tmpl) {
        test.ifError(err);
        test.ok(tmpl);
        test.equal(tmpl({name: 'Red Apples'}), 'Here are red apples.');
        test.done();
    });
};
exports['Run buildin helpers.'] = function (test) {
    var helpers = HandlebarsEngine.buildinHelpers;
    test.ok(helpers);
    test.equal(helpers.basename(null), "null");
    test.equal(helpers.basename("foo/bar.js"), "bar.js");
    test.equal(helpers.camelcase("foo_bar"), "fooBar");
    test.equal(helpers.dirname("foo/bar.js"), "foo");
    test.equal(helpers.extname("foo/bar.js"), ".js");
    test.equal(helpers.lowercase("Foo"), "foo");
    test.equal(helpers.snakecase("fooBar"), "foo_bar");
    test.equal(helpers.pascalcase("foo_bar"), "FooBar");
    test.equal(helpers.sentencecase("foo_bar"), "Foo bar");
    test.equal(helpers.spinalcase("foo_bar"), "foo-bar");
    test.equal(helpers.uppercase("foo_bar"), "FOO_BAR");
    test.done();
};