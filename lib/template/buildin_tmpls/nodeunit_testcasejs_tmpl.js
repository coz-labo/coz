/**
 * Template for sentencecase nodeunit_testcasejs.
 * @memberof module:coz/lib/template/tmpls
 * @function nodeunitTestcasejsTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

var HandlebarsEngine = require('../buildin_engines').HandlebarsEngine,
    Handlebars = HandlebarsEngine.createHandlebars();

//noinspection UnterminatedStatementJS
var precompiled = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;
	
	  return "/**\n * Test case for "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}))
	    + ".\n * Runs with nodeunit.\n */\n\nvar "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}))
	    + " = require('"
	    + alias2(((helper = (helper = helpers.relative || (depth0 != null ? depth0.relative : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"relative","hash":{},"data":data}) : helper)))
	    + "');\n\nexports['"
	    + alias2((helpers.sentencecase || (depth0 && depth0.sentencecase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"sentencecase","hash":{},"data":data}))
	    + "'] = function(test){\n\n    test.done();\n};\n\n";
	},"useData":true});;

/** @lends nodeunitTestcasejsTmpl */
function nodeunitTestcasejsTmpl(data) {
    return precompiled(data);
}

nodeunitTestcasejsTmpl.$name = 'nodeunitTestcasejs';
nodeunitTestcasejsTmpl.$aliases = [
    'nodeunitTestcasejs',
    'nodeunitTestcasejsTmpl'
];

module.exports = nodeunitTestcasejsTmpl;