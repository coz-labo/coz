/**
 * Bud file loader.
 * @memberof leaf/lib/bud
 * @constructor BudLoader
 */

"use strict";

var core = require('../core'),
    ext = require('../ext'),
    glob = ext.glob,
    path = core.path,
    fs = core.fs,
    async = ext.async,
    copying = require('../util/copying'),
    _concatBuds = require('./_concat_buds'),
    Bud = require('./bud');

/** @lends BudLoader */
function BudLoader() {
    var s = this;
}

BudLoader.prototype = {
    /**
     * Load bud.
     * @param {Bud|string} bud - Bud or source filename of it.
     * @param {budLoaderLoadCallback} callback - Callback when done.
     */
    load: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(Bud.new);
        async.waterfall([
            function requireBud(callback) {
                s._requireBud(bud, callback);
            },
            function evaluateBud(bud, callback) {
                s._evaluateBud(bud, callback);
            },
            function makeupBud(bud, callback) {
                s._makeupBud(bud, callback);
            },
            function convertBud(bud, callback) {
                s._convertBud(bud, callback);
            }
        ], callback);
    },
    /**
     * Require a module.
     * @param {Bud} bud - Bud to require.
     * @param {function} callback - Callback when done.
     * @private
     */
    _requireBud: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var src = bud.src || bud;
            async.waterfall([
                function (callback) {
                    var filename = path.resolve(src);
                    fs.exists(filename, function (exists) {
                        callback(null, exists ? filename : src);
                    });
                },
                function (name) {
                    var err = null;
                    try {
                        bud = require(name);
                    } catch (catched) {
                        err = "[BudLoader]" + catched;
                    } finally {
                        bud.src = path.resolve(src);
                        callback(err, bud);
                    }
                }
            ], callback);
        }, callback);
    },
    /**
     * Evaluate bud content.
     * @param {object|function} bud - Module to evaluate.
     * @param {function} callback - Callback when done.
     * @private
     */
    _evaluateBud: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            switch (typeof(bud)) {
                case 'function':
                    var load = bud;
                    load(function (err, bud) {
                        bud = [].concat(bud).map(function (bud) {
                            copying.fallbackCopy(load, bud);
                            return bud;
                        });
                        callback(err, bud)
                    });
                    break;
                default:
                    callback(null, bud);
                    break;
            }
        }, callback);
    },
    /**
     * Makeup bud content.
     * @param {Bud} bud - Configuration to evaluate.
     * @param {function} callback - Callback when done.
     * @private
     */
    _makeupBud: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var src = path.resolve(bud.src || bud),
                dirname = path.dirname(src),
                basename = path.basename(src, path.extname(src));
            bud.path = path.resolve(dirname, bud.path || basename.replace(/^[\._]/, ''));
            bud.cwd = dirname;
            bud.tmpl = bud.tmpl || glob.sync(path.resolve(dirname, basename + '.*'))
                .filter(function (tmpl) {
                    return tmpl !== src;
                })
                .shift();
            callback(null, bud);
        }, callback);
    },
    /**
     * Convert bud content.
     * @param {Bud} bud - Configuration to convert.
     * @param {function} callback - Callback when done.
     * @private
     */
    _convertBud: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (data, callback) {
            callback(null, Bud.new(data));
        }, callback);
    }
};

module.exports = BudLoader;


/**
 * Callback for bud load
 * @memberof leaf/lib/bud
 * @callback budLoaderLoadCallback
 * @param {Error} err - Load error.
 * @param {Bud} bud - Loaded bud.
 */