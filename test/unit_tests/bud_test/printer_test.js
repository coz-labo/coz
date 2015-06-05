/**
 * Test case for plant.js
 * Runs with nodeunit.
 */

"use strict";

var Printer = require('../../../lib/printing/printer');

exports['Create printer.'] = function (test) {
    var bud = new Printer({
        path: 'foo/bar'
    });
    test.ok(bud);
    test.done();
};
