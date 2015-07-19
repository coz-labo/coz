/**
 * Template for sentencecase structjs.
 * @memberof module:coz/lib/template/tmpls
 * @function structjsTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

var HandlebarsEngine = require('../buildin_engines').HandlebarsEngine,
    Handlebars = HandlebarsEngine.createHandlebars();

//noinspection UnterminatedStatementJS
var precompiled = Handlebars.template({"1":function(depth0,helpers,partials,data) {
	    var alias1=helpers.helperMissing, alias2=this.escapeExpression;
	
	  return "    /** Value of "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + " */\n    "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + ": undefined,\n";
	},"3":function(depth0,helpers,partials,data) {
	    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;
	
	  return "            "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + ": s.get"
	    + alias2((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,depth0,{"name":"pascalcase","hash":{},"data":data}))
	    + "()"
	    + ((stack1 = helpers['if'].call(depth0,(data && data.last),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "");
	},"4":function(depth0,helpers,partials,data) {
	    return "";
	},"6":function(depth0,helpers,partials,data) {
	    return ",\n        ";
	},"8":function(depth0,helpers,partials,data) {
	    var alias1=helpers.helperMissing, alias2=this.escapeExpression;
	
	  return "    /**\n     * Get "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + " value.\n     * @returns Value of "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + ".\n     */\n    get"
	    + alias2((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,depth0,{"name":"pascalcase","hash":{},"data":data}))
	    + ": function () {\n        var s = this;\n        return s."
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + ";\n    },\n";
	},"10":function(depth0,helpers,partials,data) {
	    var alias1=helpers.helperMissing, alias2=this.escapeExpression;
	
	  return "            s.set"
	    + alias2((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,depth0,{"name":"pascalcase","hash":{},"data":data}))
	    + "(data."
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + ");\n";
	},"12":function(depth0,helpers,partials,data) {
	    var alias1=helpers.helperMissing, alias2=this.escapeExpression;
	
	  return "    /**\n     * Set "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + " value.\n     * @param "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + " - Value to set.\n     * @returns Self.\n     */\n    set"
	    + alias2((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,depth0,{"name":"pascalcase","hash":{},"data":data}))
	    + ": function("
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + ") {\n        var s = this;\n        s."
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + " = "
	    + alias2((helpers.camelcase || (depth0 && depth0.camelcase) || alias1).call(depth0,depth0,{"name":"camelcase","hash":{},"data":data}))
	    + ";\n    },\n";
	},"14":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "'"
	    + this.escapeExpression(this.lambda(depth0, depth0))
	    + "'"
	    + ((stack1 = helpers['if'].call(depth0,(data && data.last),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "");
	},"15":function(depth0,helpers,partials,data) {
	    return ", ";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "/**\n * "
	    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
	    + "\n * @memberof module:"
	    + alias3(((helper = (helper = helpers.module || (depth0 != null ? depth0.module : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"module","hash":{},"data":data}) : helper)))
	    + "\n * @inner\n * @constructor "
	    + alias3((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}))
	    + "Struct\n */\n\n\"use strict\";\n\n/** @lends "
	    + alias3((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}))
	    + "Struct */\nfunction "
	    + alias3((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}))
	    + "Struct(values) {\n    var s = this;\n    s.set(values);\n}\n\n"
	    + alias3((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}))
	    + "Struct.prototype = {\n\n    // --- Properties ---\n\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keys : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n    // --- Getters ---\n\n    get: function () {\n        var s = this;\n        return {\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keys : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n        }\n    },\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keys : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n    // --- Setters ---\n\n    set: function (data) {\n        var s = this;\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keys : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "        return s;\n    },\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keys : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n    // --- Meta ---\n\n    $keys:["
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keys : depth0),{"name":"each","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "]\n};\n\nmodule.exports = "
	    + alias3((helpers.pascalcase || (depth0 && depth0.pascalcase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"pascalcase","hash":{},"data":data}))
	    + "Struct;";
	},"useData":true});;

/** @lends structjsTmpl */
function structjsTmpl(data) {
    return precompiled(data);
}

structjsTmpl.$name = 'structjs';
structjsTmpl.$aliases = [
    'structjs',
    'structjsTmpl'
];

module.exports = structjsTmpl;