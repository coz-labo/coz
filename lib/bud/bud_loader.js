/**
 * Bud file loader.
 * @memberof module:coz/lib/bud
 * @inner
 * @constructor BudLoader
 */

"use strict";

var core = require('../core'),
    ext = require('../ext'),
    unorm = ext.unorm,
    path = core.path,
    fs = core.fs,
    async = ext.async,
    copying = require('../util/copying'),
    file = require('../util/file'),
    expandglob = require('expandglob'),
    _nextTick = require('./_next_tick'),
    _concatBuds = require('./_concat_buds'),
    Bud = require('./bud');

/** @lends module:coz/lib/bud~BudLoader */
function BudLoader() {
    var s = this;
}

BudLoader.prototype = {
    /**
     * Load bud.
     * @param {module:coz/lib/bud~Bud|string} bud - Bud or source filename of it.
     * @param {module:coz/lib/bud~loadCallback} callback - Callback when done.
     */
    load: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(Bud.new);
        async.waterfall([
            function (callback) {
                _nextTick(bud, callback);
            },
            function requireBud(bud, callback) {
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
     * @param {module:coz/lib/bud~Bud} bud - Bud to require.
     * @param {function} callback - Callback when done.
     * @private
     */
    _requireBud: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var src = bud.src || bud;
            if (typeof(src) === 'object') {
                // Seems already required.
                callback(null, bud);
                return;
            }
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
                        bud = [].concat(bud || []).map(function (bud) {
                            bud.src = path.resolve(src);
                            return bud
                        });
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
     * @param {module:coz/lib/bud~Bud} bud - Configuration to evaluate.
     * @param {function} callback - Callback when done.
     * @private
     */
    _makeupBud: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var src = bud.src && path.resolve(bud.src) || null,
                dirname = src && path.dirname(src) || bud.pwd || process.cwd(),
                basename = path.basename(src, path.extname(src));
            bud.path = path.resolve(dirname, bud.path || basename.replace(/^[\._]/, ''));
            bud.cwd = dirname;
            bud.tmpl = bud.tmpl || expandglob.sync([
                    path.resolve(dirname, basename + '.*'),
                    path.resolve(dirname, unorm.nfc(basename) + '.*'),
                    path.resolve(dirname, unorm.nfd(basename) + '.*')
                ])
                    .filter(function (tmpl) {
                        return tmpl !== src;
                    })
                    .shift() || 'json';
            callback(null, bud);
        }, callback);
    },
    /**
     * Convert bud content.
     * @param {module:coz/lib/bud~Bud} bud - Configuration to convert.
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
 * @memberof module:coz/lib/bud
 * @inner
 * @callback loadCallback
 * @param {?Error} err - Load error.
 * @param {module:coz/lib/bud~Bud} bud - Loaded bud.
 */