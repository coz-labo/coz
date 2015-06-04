/**
 * Load a bud from file.
 * @memberof module:planter
 * @function loadBud
 * @param {object} config - Bud configuration.
 * @param {loadBudCallback} callback - Callback when done.
 */

"use strict";

var ext = require('../ext'),
    async = ext.async,
    BudConfig = require('./bud_config'),
    Bud = require('./bud');

/** @lends loadBud */
function loadBud(src, callback) {
    async.waterfall([
        function (callback) {
            try {
                var data = require(src);
                callback(null, data);
            } catch (e) {
                callback(e);
            }
        },
        function (data, callback) {
            switch (typeof(data)) {
                case 'function':
                    data(function (err, data) {
                        callback(err, data)
                    });
                    break;
                default:
                    callback(null, data);
            }
        },
        function (data, callback) {
            callback(null, new BudConfig(data));
        }
    ], callback);


}

module.exports = loadBud;


/**
 * @callback loadBudCallback
 * @param {error} err - Bud error.
 * @param {BudConfig} - Bud configuration.
 */
