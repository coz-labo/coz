/**
 * Test case for index.
 * Runs with nodeunit.
 */

"use strict";

var coz = require('../lib');

exports['Eval index.'] = function (test) {
    test.ok(coz.bud);

    test.ok(coz.template);
    Object.keys(coz.template).forEach(function (key) {
        test.ok(coz.template[key]);
    });

    test.ok(coz.util);
    Object.keys(coz.util).forEach(function (key) {
        test.ok(coz.util[key]);
        Object.keys(coz.util[key]).forEach(function (innerKey) {
            test.ok(coz.util[key][innerKey]);
        });
    });

    test.done();
};
