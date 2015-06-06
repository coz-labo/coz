/**
 * Test case for text_tmpl_test.js
 * Runs with nodeunit
 */

"use strict";

var textTmpl = require('../../../lib/template/tmpls/text_tmpl.js');

exports['Render text.'] = function (test) {
    var rendered = textTmpl({foo: 'bar'});
    test.ok(rendered);
    test.done();
};
