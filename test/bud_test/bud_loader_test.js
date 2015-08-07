/**
 * Test case for module:leaf/lib/bud.BudLoader
 * Runs with nodeunit
 */

"use strict";

var BudLoader = require('../../lib/bud/bud_loader.js');

exports['Load a bud.'] = function (test) {
    var src = __dirname + '/../../docs/mockups/mock-bud.bud';
    new BudLoader().load(src, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

exports['Evaluate a bud.'] = function (test) {
    new BudLoader()._evaluateBud(function (callback) {
        callback(null, {});
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};