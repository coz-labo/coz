/**
 * Test case for module:leaf
 * Runs with nodeunit.
 */

"use strict";

var Coz = require('../../lib/coz.js')
    ;

exports['Create leaf.'] = function (test) {
    var leaf = new Coz();
    test.ok(leaf);
    test.done();
};

exports['Do render.'] = function (test) {
    var leaf = new Coz();
    var src = __dirname + '/../mocks/mock-bud.bud';
    leaf.render([
        src
    ], {}, function (err) {
        test.ifError(err);
        test.done();
    });
};


