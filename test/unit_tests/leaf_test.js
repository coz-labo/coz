/**
 * Test case for leaf.js
 * Runs with nodeunit.
 */

"use strict";

var Leaf = require('../../lib/leaf.js')
    ;

exports['Create leaf.'] = function (test) {
    var leaf = new Leaf();
    test.ok(leaf);
    test.done();
};

exports['Do render.'] = function (test) {
    var leaf = new Leaf();
    var src = __dirname + '/../mocks/mock-bud.bud';
    leaf.render([
        src
    ], {}, function (err) {
        test.ifError(err);
        test.done();
    });
};


