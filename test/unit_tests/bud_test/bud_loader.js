/**
 * Test case for module:leaf/lib/bud.BudLoader
 * Runs with nodeunit
 */

"use strict";

var BudLoader = require('../../../lib/bud/bud_loader.js');

exports['Load a bud.'] = function (test) {
    var src = __dirname + '/../../mocks/mock-bud.bud';
    new BudLoader().load(src, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};