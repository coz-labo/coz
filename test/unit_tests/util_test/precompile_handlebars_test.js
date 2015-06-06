/**
 * Test case for module:leaf/lib/util/compiling/compileHandlebars
 * Runs with nodeunit.
 */

"use strict";

var precompileHandlebars = require('../../../lib/util/compiling/precompile_handlebars.js');

exports['Compile handlebars file.'] = function (test) {
    var tmpl = precompileHandlebars('Here are {{toLowercase name}}.', {
        helpers: {
            toLowercase: function (str) {
                return str.toLowerCase();
            }
        }
    });
    test.ok(tmpl);
    test.done();
};