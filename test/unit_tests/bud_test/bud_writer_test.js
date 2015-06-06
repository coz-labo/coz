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