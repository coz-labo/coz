/**
 * Test case for load_printer.js
 * Runs with nodeunit.
 */

"use strict";

var loadPrinter = require('../../../lib/printing/load_printer'),
    path = require('path');

exports['Create bud config.'] = function (test) {
    var filename = path.resolve(__dirname, '../../mocks/mock-bud.bud');
    loadPrinter(filename, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

exports['Create bud config async.'] = function (test) {
    var filename = path.resolve(__dirname, '../../mocks/mock-async-bud.bud');
    loadPrinter(filename, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

exports['Try to load invalid bud.'] = function (test) {
    loadPrinter('__invalid_src_', function (err) {
        test.ok(!!err);
        test.done();
    });
};
