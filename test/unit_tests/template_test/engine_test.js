/**
 * Test case for module:leaf/lib/template/engines.Engine
 * Runs with nodeunit.
 */

"use strict";

var Engine = require('../../../lib/template/engines/engine.js');


exports['Construct a engine.'] = function (test) {
    var engine = new Engine({});
    engine.set('foo', 'baz');
    test.equal(engine.foo, 'baz');
    engine.set({'foo': 'quz'});
    test.equal(engine.foo, 'quz');
    test.equal(engine.clone().foo, 'quz');
    test.done();
};


exports['Define a constructor.'] = function (test) {
    var Defined = Engine.define({
        $name: 'baz',
        compile: function () {
        },
        foo: 'bar'
    });
    test.equal(new Defined().foo, 'bar');
    test.done();
};
