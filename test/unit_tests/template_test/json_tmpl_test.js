/**
 * Test case for json_tmpl_test.js
 * Runs with nodeunit
 */

"use strict";

var jsonTmpl = require('../../../lib/template/buildin_tmpls/json_tmpl.js');

exports['Render json.'] = function (test) {
    var rendered = jsonTmpl({foo: 'bar'});
    test.ok(rendered);
    test.done();
};
