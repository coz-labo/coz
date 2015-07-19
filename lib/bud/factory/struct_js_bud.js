/**
 * Bud file for struct.js
 * @memberof module:coz/lib/bud/factory
 * @function structJsBud
 * @param {object} config - Struct js configuration.
 * @param {string[]} config.keys - Struct keys.
 * @param {string} config.desc - Module description.
 * @param {string} config.name - Name of module.
 * @param {string} config.module - Module annotation.
 * @returns {module:coz/lib/bud~Bud} - Bud for index.js
 */

"use strict";

var Bud = require('../../bud/bud'),
    core = require('../../core'),
    assert = core.assert;

/** @lends structJsBud */
function structJsBud(config) {
    var keys = config.keys;
    assert.ok(!!keys, 'config.keys is required.');
    return new Bud({
        force: true,
        mode: '444',
        mkdirp: false,
        tmpl: 'structjs',
        data: {
            keys: [].concat(config.keys),
            desc:config.desc,
            name:config.name,
            module:config.module
        }
    });
}

module.exports = structJsBud;

