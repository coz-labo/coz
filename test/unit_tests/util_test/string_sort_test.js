/**
 * Test case for sorting/string_sort.js
 * Runs with nodeunit
 */

"use strict";

var stringSort = require('../../../lib/util/sorting/string_sort.js');

exports['Sort string.'] = function (test) {
    test.deepEqual(
        ['a', 'b', 'c'],
        ['a', 'c', 'b'].sort(stringSort())
    );
    test.deepEqual(
        ['c', 'b', 'a'],
        ['a', 'c', 'b'].sort(stringSort({desc: true}))
    );
    test.done();
};