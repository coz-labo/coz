/**
 * Template for sentencecase indexjs.
 * @memberof module:kyo/lib/template/tmpls
 * @function indexjsTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

var HandlebarsEngine = require('../buildin_engines').HandlebarsEngine,
    Handlebars = HandlebarsEngine.createHandlebars();

//noinspection UnterminatedStatementJS
var precompiled = Handlebars.template({"1":function(depth0,helpers,partials,data) {
	    var helper, alias1=this.escapeExpression;
	
	  return "\n * @"
	    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
	    + " "
	    + alias1(this.lambda(depth0, depth0));
	},"3":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
	    + "\n";
	},"4":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return "\n * @property "
	    + this.escapeExpression((helpers.camelcase || (depth0 && depth0.camelcase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}))
	    + " {object} - "
	    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depths[1] != null ? depths[1].doc : depths[1])) != null ? stack1.module : stack1),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
	},"5":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;
	
	  return "{@link "
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isModule : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}))
	    + "|"
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}))
	    + " module}.";
	},"6":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return "module:"
	    + this.escapeExpression(this.lambda(((stack1 = (depths[3] != null ? depths[3].doc : depths[3])) != null ? stack1.module : stack1), depth0))
	    + "/";
	},"8":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return this.escapeExpression(this.lambda(((stack1 = (depths[3] != null ? depths[3].doc : depths[3])) != null ? stack1.module : stack1), depth0))
	    + ".";
	},"10":function(depth0,helpers,partials,data) {
	    return this.escapeExpression((helpers.snakecase || (depth0 && depth0.snakecase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"snakecase","hash":{},"data":data}))
	    + " ";
	},"12":function(depth0,helpers,partials,data) {
	    return "\n";
	},"14":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "    get "
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isPascal : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.program(17, data, 0),"data":data})) != null ? stack1 : "")
	    + "() { return require('./"
	    + this.escapeExpression((helpers.snakecase || (depth0 && depth0.snakecase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"snakecase","hash":{},"data":data}))
	    + "'); }"
	    + ((stack1 = helpers['if'].call(depth0,(data && data.last),{"name":"if","hash":{},"fn":this.program(19, data, 0),"inverse":this.program(21, data, 0),"data":data})) != null ? stack1 : "");
	},"15":function(depth0,helpers,partials,data) {
	    return this.escapeExpression((helpers.pascalcase || (depth0 && depth0.pascalcase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}));
	},"17":function(depth0,helpers,partials,data) {
	    return this.escapeExpression((helpers.camelcase || (depth0 && depth0.camelcase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"camelcase","hash":{},"data":data}));
	},"19":function(depth0,helpers,partials,data) {
	    return "";
	},"21":function(depth0,helpers,partials,data) {
	    return ",\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, helper;
	
	  return "/**\n * "
	    + this.escapeExpression(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.doc : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.docProperties : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
	    + " */\n\n\"use strict\";\n\nmodule.exports = {\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
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