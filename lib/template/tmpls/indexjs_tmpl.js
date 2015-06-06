/**
 * Template for sentencecase indexjs.
 * @memberof module:leaf/lib/template/tmpls
 * @function indexjsTmpl
 * @param {object} data - Data to render.
 * @returns {string} rendered string.
 */

"use strict";

var HandlebarsEngine = require('../engines').HandlebarsEngine,
    Handlebars = HandlebarsEngine.createHandlebars();

//noinspection UnterminatedStatementJS
var precompiled = Handlebars.template({1:function(a,e,n,s){var l,r=this.escapeExpression;return"\n * @"+r((l=null!=(l=e.key||s&&s.key)?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"key",hash:{},data:s}):l))+" "+r(this.lambda(a,a))},3:function(a,e,n,s,l,r){var c;return(null!=(c=e.each.call(a,null!=a?a.modules:a,{name:"each",hash:{},fn:this.program(4,s,0,l,r),inverse:this.program(10,s,0,l,r),data:s}))?c:"")+"\n"},4:function(a,e,n,s,l,r){var c;return"\n * @property "+this.escapeExpression((e.camelcase||a&&a.camelcase||e.helperMissing).call(a,null!=a?a.name:a,{name:"camelcase",hash:{},data:s}))+" {object} - "+(null!=(c=e["if"].call(a,null!=(c=null!=r[1]?r[1].doc:r[1])?c.module:c,{name:"if",hash:{},fn:this.program(5,s,0,l,r),inverse:this.noop,data:s}))?c:"")},5:function(a,e,n,s,l,r){var c,i=this.escapeExpression,t=e.helperMissing;return"{@link module:"+i(this.lambda(null!=(c=null!=r[3]?r[3].doc:r[3])?c.module:c,a))+(null!=(c=e["if"].call(a,null!=a?a.isModule:a,{name:"if",hash:{},fn:this.program(6,s,0,l,r),inverse:this.program(8,s,0,l,r),data:s}))?c:"")+i((e.camelcase||a&&a.camelcase||t).call(a,null!=a?a.name:a,{name:"camelcase",hash:{},data:s}))+"|"+i((e.camelcase||a&&a.camelcase||t).call(a,null!=a?a.name:a,{name:"camelcase",hash:{},data:s}))+" module}."},6:function(a,e,n,s){return"/"},8:function(a,e,n,s){return"."},10:function(a,e,n,s){return this.escapeExpression((e.snakecase||a&&a.snakecase||e.helperMissing).call(a,null!=a?a.name:a,{name:"snakecase",hash:{},data:s}))+" "},12:function(a,e,n,s){return"\n"},14:function(a,e,n,s){var l;return"    get "+(null!=(l=e["if"].call(a,null!=a?a.isPascal:a,{name:"if",hash:{},fn:this.program(15,s,0),inverse:this.program(17,s,0),data:s}))?l:"")+"() { return require('./"+this.escapeExpression((e.snakecase||a&&a.snakecase||e.helperMissing).call(a,null!=a?a.name:a,{name:"snakecase",hash:{},data:s}))+"'); }"+(null!=(l=e["if"].call(a,s&&s.last,{name:"if",hash:{},fn:this.program(19,s,0),inverse:this.program(21,s,0),data:s}))?l:"")},15:function(a,e,n,s){return this.escapeExpression((e.pascalcase||a&&a.pascalcase||e.helperMissing).call(a,null!=a?a.name:a,{name:"pascalcase",hash:{},data:s}))},17:function(a,e,n,s){return this.escapeExpression((e.camelcase||a&&a.camelcase||e.helperMissing).call(a,null!=a?a.name:a,{name:"camelcase",hash:{},data:s}))},19:function(a,e,n,s){return""},21:function(a,e,n,s){return",\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s,l,r){var c,i;return"/**\n * "+this.escapeExpression((i=null!=(i=e.desc||(null!=a?a.desc:a))?i:e.helperMissing,"function"==typeof i?i.call(a,{name:"desc",hash:{},data:s}):i))+(null!=(c=e.each.call(a,null!=a?a.doc:a,{name:"each",hash:{},fn:this.program(1,s,0,l,r),inverse:this.noop,data:s}))?c:"")+(null!=(c=e["if"].call(a,null!=a?a.docProperties:a,{name:"if",hash:{},fn:this.program(3,s,0,l,r),inverse:this.program(12,s,0,l,r),data:s}))?c:"")+' */\n\n"use strict";\n\nmodule.exports = {\n'+(null!=(c=e.each.call(a,null!=a?a.modules:a,{name:"each",hash:{},fn:this.program(14,s,0,l,r),inverse:this.noop,data:s}))?c:"")+"\n};"},useData:!0,useDepths:!0});;

/** @lends indexjsTmpl */
function indexjsTmpl(data) {
    return precompiled(data);
}

module.exports = indexjsTmpl;