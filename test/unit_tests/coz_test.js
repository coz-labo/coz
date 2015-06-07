/**
 * Test case for module:coz
 * Runs with nodeunit.
 */

"use strict";

var Coz = require('../../lib/coz.js');

exports['Create coz.'] = function (test) {
    var coz = new Coz();
    test.ok(coz);
    test.done();
};

exports['Do render.'] = function (test) {
    var coz = new Coz();
    var src = __dirname + '/../mocks/mock-bud.bud';
    coz.render([
        src
    ], {}, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Handle error.'] = function (test) {
    var coz = new Coz();
    var error = console.error;
    console.error = function () {
    };
    coz._handleError('foo');
    console.error = error;
    test.done();
};