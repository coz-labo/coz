/**
 * Set of tmpls.
 * @memberof leaf/lib/template
 * @constructor TmplSet
 */

"use strict";

var buildinTmpls = require('./buildin_tmpls'),
    _approximatelyEqual = require('./_approximately_equal');


/** @lends TmplSet */
function TmplSet() {
    var s = this;
    s._tmpls = {};
    s.registerTmpls(buildinTmpls);
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
        tmpl.$name = tmpl.$name || name;
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
        var s = this,
            tmpls = s._tmpls;
        var keys = Object.keys(tmpls);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i], tmpl = tmpls[key];
            if (key === name) {
                return tmpl;
            }
            var hitByName = _approximatelyEqual(tmpl.$name, name);
            if (hitByName) {
                return tmpl;
            }
            var aliases = tmpl.$aliases || [];
            for (var j = 0; j < aliases.length; j++) {
                var hitByAlias = _approximatelyEqual(aliases[j], name);
                if (hitByAlias) {
                    return tmpl;
                }
            }
        }
        return null;
    }

};

module.exports = TmplSet;