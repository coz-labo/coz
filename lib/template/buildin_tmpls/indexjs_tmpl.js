/**
 * Template for sentencecase indexjs.
 * @memberof module:coz/lib/template/tmpls
 * @function indexjsTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

var Handlebars = require('coz-handlebars-engine/lib/handlebars');

//noinspection UnterminatedStatementJS
var precompiled = Handlebars.template({"1":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "\n * @module "
	    + this.escapeExpression(((helper = (helper = helpers.module || (depth0 != null ? depth0.module : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"module","hash":{},"data":data}) : helper)));
	},"3":function(depth0,helpers,partials,data) {
	    return "\n * @see module:"
	    + this.escapeExpression(this.lambda(depth0, depth0));
	},"5":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, helper;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSubmodules : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    "
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSubclass : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
	    + "() { return require('./"
	    + this.escapeExpression(((helper = (helper = helpers.requireName || (depth0 != null ? depth0.requireName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requireName","hash":{},"data":data}) : helper)))
	    + "'); }"
	    + ((stack1 = helpers['if'].call(depth0,(data && data.last),{"name":"if","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.program(14, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
	},"6":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;
	
	  return "    /**\n     * @memberof module:"
	    + alias2(alias1((depths[2] != null ? depths[2].module : depths[2]), depth0))
	    + "\n     * @name {@link module:"
	    + alias2(alias1((depths[2] != null ? depths[2].module : depths[2]), depth0))
	    + "/"
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias3).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}))
	    + "|"
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias3).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}))
	    + ((stack1 = alias1((depths[2] != null ? depths[2].END_BRACE : depths[2]), depth0)) != null ? stack1 : "")
	    + "\n     */\n";
	},"8":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;
	
	  return "/**\n     * @memberof module:"
	    + alias2(alias1((depths[2] != null ? depths[2].module : depths[2]), depth0))
	    + "\n     * @name {@link module:"
	    + alias2(alias1((depths[2] != null ? depths[2].module : depths[2]), depth0))
	    + "~"
	    + alias2((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias3).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}))
	    + "|"
	    + alias2((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias3).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}))
	    + ((stack1 = alias1((depths[2] != null ? depths[2].END_BRACE : depths[2]), depth0)) != null ? stack1 : "")
	    + "\n     */\n    get "
	    + alias2((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias3).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}));
	},"10":function(depth0,helpers,partials,data) {
	    return "get "
	    + this.escapeExpression((helpers.camelcase || (depth0 && depth0.camelcase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}));
	},"12":function(depth0,helpers,partials,data) {
	    return "";
	},"14":function(depth0,helpers,partials,data) {
	    return ",\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, helper;
	
	  return "/**\n * "
	    + this.escapeExpression(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.module : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.parentmodule : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n */\n\n\"use strict\";\n\nmodule.exports = {\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n};";
	},"useData":true,"useDepths":true});;

/** @lends indexjsTmpl */
function indexjsTmpl(data) {
    return precompiled(data);
}

indexjsTmpl.$name = 'indexjs';
indexjsTmpl.$aliases = [
    'indexjs',
    'indexjsTmpl'
];

module.exports = indexjsTmpl;