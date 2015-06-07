/**
 * Test case for module:leaf/lib/util/minifying/minifyJavascript
 * Runs with nodeunit.
 */

"use strict";


var minifyJavascript = require('../../../lib/util/minifying/minify_javascript');

exports['Minify javascript.'] = function (test) {
    var minified = minifyJavascript('var a=1 + 3;');
    test.ok(minified);
    test.done();
};

exports['Minify empty.'] = function (test) {
    test.equal(minifyJavascript(null), null);
    test.done();
};