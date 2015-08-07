/**
 * Test case for updateShBud.
 * Runs with nodeunit.
 */

var updateShBud = require('../../lib/bud/factory/update_sh_bud.js');

exports['Update sh bud'] = function (test) {
    var bud = updateShBud({
        pkg: {}
    });
    test.ok(bud);
    test.ok(bud.data.pkg);
    test.done();
};

