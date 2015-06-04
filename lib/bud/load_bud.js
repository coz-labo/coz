/**
 * Load a bud from file.
 * @memberof module:planter
 * @function loadBud
 * @param {object} config - Bud configuration.
 * @param {loadBudCallback} callback - Callback when done.
 */

"use strict";

var core = require('../core'),
    ext = require('../ext'),
    path = core.path,
    async = ext.async,
    BudConfig = require('./bud_config'),
    Bud = require('./bud');

function _defaultPath(src) {
    var dirname = path.dirname(src),
        basename = path.basename(src, path.extname(src)).replace(/^[\._]/, '');
    return path.resolve(dirname, basename);
}


/** @lends loadBud */
function loadBud(src, callback) {
    async.waterfall([
        function (callback) {
            try {
                var data = require(path.resolve(src));
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
            if (!data.path) {
                data.path = _defaultPath(src);
            }
            console.log('data', data);
            callback(null, new BudConfig(data));
        },
        function (config, callback) {
            callback(null, new Bud(config));
        }
    ], callback);


}

module.exports = loadBud;


/**
 * @callback loadBudCallback
 * @param {error} err - Bud error.
 * @param {BudConfig} - Bud configuration.
 */
