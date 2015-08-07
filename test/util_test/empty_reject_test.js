/**
 * Test case for module:coz/lib/util/filtering.emptyReject.
 * Runs with nodeunit.
 */

var emptyReject = require('../../lib/util/filtering/empty_reject.js');

exports['Empty reject'] = function (test) {
    var filter = emptyReject();
    test.ok(filter('foo'));
    test.ok(!filter(null));
    test.ok(!filter(undefined));
    test.ok(!filter(''));
    test.throws(function () {
        [1, 2, 3].filter(emptyReject);
    });
    test.done();
};

