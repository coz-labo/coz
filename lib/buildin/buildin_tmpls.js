/**
 * Buildin templates.
 * @module coz/lib/buildin_tmpls
 */

"use strict";

module.exports = {
    json(data) {
        return JSON.stringify(data, null, 4);
    },
    text(data) {
        return String(data);
    }
};