/**
 * Test case for module:leaf/lib/bud.BudCompiler
 * Runs with nodeunit
 */

"use strict";

var BudCompiler = require('../../lib/bud/bud_compiler.js');

exports['Compile a bud.'] = function (test) {
    var bud = require('./../../docs/mockups/mock-bud.bud');
    new BudCompiler().compile(bud, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

exports['Read tmpl from source.'] = function (test) {
    new BudCompiler()._prepareBudTmpl({
        tmpl: __filename
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Handle tmpl error.'] = function (test) {
    new BudCompiler()._prepareBudTmpl({}, function (err) {
        test.ok(!!err);
        test.done();
    });
};

exports['Handle engine error.'] = function (test) {
    new BudCompiler()._prepareBudEngine({}, function (err) {
        test.ok(!!err)
        test.done();
    })
};

exports['Compile template string.'] = function (test) {
    new BudCompiler()._compileBudTmpl({
        tmpl: '{{name}}',
        engine: {
            compile: function (tmpl, callback) {
                test.ok(!!tmpl);
                callback(null);
            }
        }
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};