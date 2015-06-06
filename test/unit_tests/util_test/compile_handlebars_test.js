/**
 * Test case for compiling/compile_handlebars.js
 * Runs with nodeunit.
 */

"use strict";

var compileHandlebars = require('../../../lib/util/compiling/compile_handlebars.js');

exports['Compile handlebars file.'] = function (test) {
    var tmpl = compileHandlebars('Here are {{toLowercase name}}.', {
        helpers: {
            toLowercase: function (str) {
                return str.toLowerCase();
            }
        }
    });
    test.ok(tmpl);
    test.equal(tmpl({name: 'Red Apples'}), 'Here are red apples.');
    test.done();
};