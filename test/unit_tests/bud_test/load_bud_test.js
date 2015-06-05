/**
 * Test case for bud.js
 * Runs with nodeunit.
 */

"use strict";

var loadBud = require('../../../lib/bud/load_bud'),
    path = require('path');

exports['Create bud config.'] = function (test) {
    var filename = path.resolve(__dirname, '../../mocks/mock-bud.bud');
    loadBud(filename, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

exports['Create bud config async.'] = function (test) {
    var filename = path.resolve(__dirname, '../../mocks/mock-async-bud.bud');
    loadBud(filename, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

exports['Try to load invalid bud.'] = function (test) {
    loadBud('__invalid_src_', function (err) {
        test.ok(!!err);
        test.done();
    });
};
