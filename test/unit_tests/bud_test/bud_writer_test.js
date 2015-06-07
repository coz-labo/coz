/**
 * Test case for module:leaf/lib/bud.BudWriter
 * Runs with nodeunit
 */

"use strict";

var BudWriter = require('../../../lib/bud/bud_writer.js');

exports['Write a bud.'] = function (test) {
    var bud = {
        tmpl: function () {
            return 'foo'
        },
        done: false,
        mkdirp: true,
        path: __dirname + '/../../.work/bar/baz/bud_written.txt'
    };
    new BudWriter().write(bud, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

exports['Handle tmpl error.'] = function (test) {
    var bud = {
        tmpl: function () {
            throw new Error('foo');
        }
    };
    new BudWriter()._renderBudOut(bud, function (err) {
        test.ok(!!err)
        test.done();
    });
};

exports['Check done.'] = function (test) {
    new BudWriter()._checkBudDone({
        force: false, path: __filename
    }, function (err) {
        test.ifError(err);
        new BudWriter()._checkBudDone({
            force: false, path: __dirname + '/../../.work/foo/bar' + new Date()
        }, function (err) {
            test.ifError(err);
            test.done();
        });
    });
};

exports['Do write.'] = function (test) {
    new BudWriter()._writeBudOut({
        mode: '644',
        path: __dirname + '/../../.work/foo.html'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};