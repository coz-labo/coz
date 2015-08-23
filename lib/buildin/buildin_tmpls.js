/**
 * Buildin templates.
 * @module coz/lib/buildin_tmpls
 */

"use strict";

module.exports = {
    json: function jsonTmpl(data) {
        return JSON.stringify(data, null, 4);
    },
    text: function textTmpl(data) {
        return String(data);
    }
};