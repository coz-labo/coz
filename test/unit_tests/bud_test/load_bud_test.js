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
