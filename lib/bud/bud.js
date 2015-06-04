/**
 * Bud object.
 * Contains template and data, generate a single file.
 * @constructor Bud
 * @memberof module:planter/lib/bud
 * @param {BudConfig} config - Bud configuration
 * @param {mode}
 */


"use strict";

var tmpls = require('../tmpls'),
    BudConfig = require('bud_config'),
    resolver = require('../resolver');

/** @lends Bud */
function Bud() {
    var s = this;
    s.init.apply(s, arguments);
}
Bud.tmpls = tmpls;
Bud.prototype = {
    /**
     * Initialize a bud file.
     */
    init: function (config) {
        var s = this;
        s.config = new BudConfig(s.config, config);
    },
    /**
     * Bud configuration.
     * @type {BudConfig}
     */
    config: null,
    /**
     * Compile template.
     * @returns {function} - Tmpl function.
     */
    compile: function () {
        var s = this;
        var compiler = resolver.resolveCompiler(s.compiler);
        if (!compiler) {
            throw new Error('Compiler not found:' + s.compiler);
        }
        switch (typeof(s.tmpl)) {
            case 'function':
                return s.tmpl.bind(s);
            case 'string':
                return null;
            default:
                return tmpls.jsonTmpl;
        }
    }

};

module.exports = Bud;