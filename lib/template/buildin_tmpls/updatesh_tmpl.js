/**
 * Template for sentencecase updatesh.
 * @memberof module:coz/lib/template/tmpls
 * @function updateshTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

var Handlebars = require('coz-handlebars-engine/lib/handlebars');

//noinspection UnterminatedStatementJS
var precompiled = Handlebars.template({"1":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return this.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
	    + " ";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "#!/bin/bash\n\n###\n# Update dependencies for "
	    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.pkg : depth0)) != null ? stack1.name : stack1), depth0))
	    + ".\n###\n\nHERE=$(cd \"$(dirname $0)\" && pwd)\nBASE_DIR=$(cd \"${HERE}/..\" && pwd)\n\ncd ${BASE_DIR}\n\n# Re-install dependencies.\nnpm uninstall "
	    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.pkg : depth0)) != null ? stack1.dependencies : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + " --save\nnpm install "
	    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.pkg : depth0)) != null ? stack1.dependencies : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + " --save\n\n# Re-install dev dependencies.\nnpm uninstall "
	    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.pkg : depth0)) != null ? stack1.devDependencies : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + " --save-dev\nnpm install "
	    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.pkg : depth0)) != null ? stack1.devDependencies : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + " --save-dev\n";
	},"useData":true});;

/** @lends updateshTmpl */
function updateshTmpl(data) {
    return precompiled(data);
}

updateshTmpl.$name = 'updatesh';
updateshTmpl.$aliases = [
    'updatesh',
    'updateshTmpl'
];

module.exports = updateshTmpl;