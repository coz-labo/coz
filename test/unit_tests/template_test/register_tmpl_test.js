/**
 * Test case for module:leaf/lib/template.registerTmpl
 * Runs with node unit.
 */

"use strict";

var registerTmpl = require('../../../lib/template/register_tmpl.js');

exports['Register a new tmpl.'] = function (test) {
    registerTmpl('foo',function(){});
    test.throws(function () {
        registerTmpl('foo', function(){});
    });
    test.done();
};
