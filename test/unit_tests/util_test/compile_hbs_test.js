/**
 * Test case for compile/compile_hbs.js
 * Runs with nodeunit.
 */

"use strict";


var compileHbs = require('../../../lib/util/compile/compile_hbs.js');

exports['Compile hbs file.'] = function (test) {
    var tmpl = compileHbs('Here are {{toLowercase name}}.', {
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