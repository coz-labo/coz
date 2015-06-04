/**
 * Test case for bud.js
 * Runs with nodeunit.
 */

"use strict";

var Bud = require('../../../lib/bud/bud');

exports['Create bud config.'] = function (test) {
    var bud = new Bud({
        path: 'foo/bar'
    });
    test.ok(bud);
    test.done();
};
