/**
 * Test case for bud_config.js
 * Runs with nodeunit.
 */

"use strict";

var BudConfig = require('../../../lib/printing/bud_config.js');

exports['Create bud config.'] = function (test) {
    var config = new BudConfig({
        path: 'foo/bar'
    });
    test.ok(config);
    var config2 = new BudConfig(config);
    test.ok(config2);
    test.done();
};
