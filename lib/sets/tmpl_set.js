/**
 * Set of tmpls.
 * @memberof module:coz/lib/sets
 * @inner
 * @constructor TmplSet
 */

"use strict";

const buildinTmpls = require('../buildin/buildin_tmpls');


/** @lends TmplSet */
function TmplSet(tmpls) {
    let s = this;
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
        let s = this;
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
        let s = this;
        let names = Object.keys(tmpls);
        for (let i = 0, len = names.length; i < len; i++) {
            let name = names[i];
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
        let isFunction = typeof(name) === 'function';
        if (isFunction) {
            return name;
        }
        let s = this;
        return s._tmpls[name] || null;
    }

};

module.exports = TmplSet;