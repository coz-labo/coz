/**
 * Test case for compile/compile_handlebars.js
 * Runs with nodeunit.
 */

"use strict";

var compileHandlebars = require('../../../lib/util/compile/compile_handlebars.js');

exports['Compile handlebars file.'] = function (test) {
    var tmpl = compileHandlebars('Here are {{toLowercase name}}.', {
        helpers: {
            toLowercase: function (str) {
                return str.toLowerCase();
            }
        }
    });
    test.ok(tmpl);
    var rendered = tmpl({name: 'Red Apples'});
    test.equal(rendered, 'Here are red apples.');
    test.done();
};