/**
 * Test case for module:coz/lib/util/sorting.stringSort
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

exports['Try invalid args.'] = function (test) {
    test.throws(function () {
        stringSort('foo', 'bar');
    });
    test.done();
};