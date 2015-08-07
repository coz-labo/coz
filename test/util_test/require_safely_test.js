/**
 * Test case for requireSafely.
 * Runs with nodeunit.
 */

var requireSafely = require('../../lib/util/requiring/require_safely.js');

exports['Require safely'] = function (test) {
    test.ok(requireSafely(__filename));
    test.equal(requireSafely('__not_existing__'), null);
    test.equal(requireSafely({}), null);
    test.equal(null, null);
    test.done();
};

