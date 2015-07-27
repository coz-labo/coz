/**
 * Bud for update.sh
 * @memberof module:coz/lib/bud/factory
 * @function updateShBud
 * @param {object} config - Update shell configuration
 * @param {object} pkg - Package.json data.
 * @returns {module:coz/lib/bud~Bud} - Bud for index.js
 */

"use strict";

var Bud = require('../../bud/bud');

function updateShBud(config) {
    config = config || {};
    var pkg = config.pkg;
    if (!pkg) {
        throw new Error('pkg is required.');
    }
    return new Bud({
        force: true,
        mode: '555',
        tmpl: 'updatesh',
        data: {
            pkg: pkg
        }
    });
}

module.exports = updateShBud;