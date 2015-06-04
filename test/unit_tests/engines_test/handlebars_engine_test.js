/**
 * Test case for handlebars_engine_test.js
 * Runs with nodeunit.
 */

"use strict";

var handlebarsEngine = require('../../../lib/engines/handlebars_engine.js');

exports['Compile handlebars.'] = function (test) {
    handlebarsEngine('my name is {{lowercase name}}', {
        lowercase: function (str) {
            return str && str.toLowerCase();
        }
    }, function (err, tmpl) {
        test.ifError(err);
        var rendered = tmpl({
            name: 'FOO'
        });
        test.equal('my name is foo', rendered);
        test.done();
    });
};
