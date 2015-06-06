/**
 * Test case for module:leaf/lib/bud.BudCompiler
 * Runs with nodeunit
 */

"use strict";

var BudCompiler = require('../../../lib/bud/bud_compiler.js');

exports['Compile a bud.'] = function (test) {
    var bud = require('./../../mocks/mock-bud.bud');
    new BudCompiler().compile(bud, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};