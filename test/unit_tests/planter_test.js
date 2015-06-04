/**
 * Testcase for planter.js
 * Runs with nodeunit.
 */

var Planter = require('../../lib/planter.js');

exports['Create planter.'] = function (test) {
    var planter = new Planter();
    test.ok(planter);
    test.done();
};
