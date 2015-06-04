/**
 * Testcase for planter.js
 * Runs with nodeunit.
 */

var Planter = require('../../lib/planter.js')
    ;

exports['Create planter.'] = function (test) {
    var planter = new Planter();
    test.ok(planter);
    test.done();
};

exports['Do blossom.'] = function (test) {
    var planter = new Planter();
    var src = __dirname + '/../mocks/mock-bud.bud'
    planter.blossom([
        src
    ], {}, function (err) {
        test.ifError(err);
        test.done();
    });
};
