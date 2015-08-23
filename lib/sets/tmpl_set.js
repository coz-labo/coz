/**
 * Set of tmpls.
 * @memberof module:coz/lib/sets
 * @inner
 * @constructor TmplSet
 */

"use strict";

var buildinTmpls = require('../buildin/buildin_tmpls');


/** @lends TmplSet */
function TmplSet(tmpls) {
    var s = this;
    s._tmpls = {};
    s.registerTmpls(buildinTmpls);
    s.registerTmpls(tmpls || {});
}

TmplSet.prototype = {
    /**
     * Register a tmpl.
     * @param {string} name - Name to register.
     * @param {function} tmpl - Template function to register.
     */
    registerTmpl: function (name, tmpl) {
        var s = this;
        if (s.resolveTmpl(name)) {
            throw new Error('Tmpl with name already registered: ' + name);
        }
        s._tmpls[name] = tmpl;
    },
    /**
     * Register multiple tmpls.
     * @param {object} tmpls - Tmpls to register.
     * @returns {TmplSet} - self.
     */
    registerTmpls: function (tmpls) {
        var s = this;
        var names = Object.keys(tmpls);
        for (var i = 0, len = names.length; i < len; i++) {
            var name = names[i];
            s.registerTmpl(name, tmpls[name]);
        }
        return s;
    },
    /**
     * Resolve an tmpl.
     * @param {string} name - Name of tmpl.
     * @returns {function} - Resolved tmpl constructor.
     */
    resolveTmpl: function (name) {
        if (!name) {
            return null;
        }
        var isFunction = typeof(name) === 'function';
        if (isFunction) {
            return name;
        }
        var s = this;
        return s._tmpls[name] || null;
    }

};

module.exports = TmplSet;