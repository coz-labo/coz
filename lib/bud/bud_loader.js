/**
 * Bud file loader.
 * @memberof leaf/lib/bud
 * @constructor BudLoader
 * @param {string} basedir - Base directory name.
 */

"use strict";

var core = require('../core'),
    ext = require('../ext'),
    glob = ext.glob,
    path = core.path,
    fs = core.fs,
    async = ext.async,
    Bud = require('./bud');

/** @lends BudLoader */
function BudLoader(basedir) {
    var s = this;
    s.basedir = basedir || s.basedir;
}

BudLoader.prototype = {
    /**
     * Base directory path.
     * @type {string}
     */
    basedir: process.cwd(),
    /**
     * Load bud.
     * @param {string} src - Source to load.
     * @param {budLoaderLoadCallback} callback - Callback when done.
     */
    load: function (src, callback) {
        var s = this;
        async.waterfall([
            function requireBud(callback) {
                s._require(src, callback);
            },
            function evaluateBud(data, callback) {
                data.$src = src;
                s._evaluate(data, callback);
            },
            function makeupBud(data, callback) {
                s._makeup(data, callback);
            },
            function convertBud(data, callback) {
                s._convert(data, callback);
            }
        ], callback);
    },
    /**
     * Resolve a path.
     * @param {string} pathname - Pathname to resolve.
     * @returns {string} - Resolved pathname.
     * @private
     */
    _resolve: function (pathname) {
        var s = this;
        return path.resolve(s.basedir, pathname);
    },
    /**
     * Require a module.
     * @param {string} name - Module name to require.
     * @param {function} callback - Callback when done.
     * @private
     */
    _require: function (name, callback) {
        var s = this;
        async.waterfall([
            function (callback) {
                var filename = s._resolve(name);
                fs.exists(filename, function (exists) {
                    callback(null, exists ? filename : name);
                });
            },
            function (name) {
                var required = null,
                    err = null;
                try {
                    required = require(name);
                } catch (catched) {
                    err = "[BudLoader]" + catched;
                } finally {
                    callback(err, required);
                }
            }
        ], callback);

    },
    /**
     * Evaluate bud content.
     * @param {object|function} data - Module to evaluate.
     * @param {function} callback - Callback when done.
     * @private
     */
    _evaluate: function (data, callback) {
        switch (typeof(data)) {
            case 'function':
                data(function (err, data) {
                    callback(err, data)
                });
                break;
            default:
                callback(null, data);
                break;
        }
    },
    /**
     * Makeup bud content.
     * @param {object} data - Configuration to evaluate.
     * @param {function} callback - Callback when done.
     * @private
     */
    _makeup: function (data, callback) {
        var s = this,
            src = data.$src;
        var dirname = path.dirname(src),
            basename = path.basename(src, path.extname(src));
        data.path = data.path || path.resolve(dirname, basename.replace(/^[\._]/, ''));
        data.cwd = s.basedir || dirname;
        data.tmpl = data.tmpl || glob.sync(path.resolve(dirname, basename + '.*'))
            .filter(function (tmpl) {
                return tmpl !== src;
            })
            .shift();
        callback(null, data);
    },
    /**
     * Convert bud content.
     * @param {object} data - Configuration to convert.
     * @param {function} callback - Callback when done.
     * @private
     */
    _convert: function (data, callback) {
        callback(null, new Bud(data));
    }
};

module.exports = BudLoader;


/**
 * @callback budLoaderLoadCallback
 * @param {Error} err - Load error.
 * @param {Bud} bud - Loaded bud.
 */