/**
 * Bud file writer.
 * @memberof module:coz/lib/bud
 * @inner
 * @constructor BudWriter
 */
"use strict";


var core = require('../core'),
    ext = require('../ext'),
    async = ext.async,
    Bud = require('./bud'),
    file = require('../util/file'),
    _nextTick = require('./_next_tick'),
    _concatBuds = require('./_concat_buds');

/** @lends module:coz/lib/bud~BudWriter */
function BudWriter() {
    var s = this;
}

BudWriter.prototype = {
    /**
     * Write bud.
     * @param {module:coz/lib/bud~Bud} bud - Bud to write.
     * @param {module:coz/lib/bud~writeCallback} callback - Callback when done.
     */
    write: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(Bud.new);
        async.waterfall([
            function (callback) {
                _nextTick(bud, callback);
            },
            function (bud, callback) {
                s._renderBudOut(bud, callback);
            },
            function (bud, callback) {
                s._checkBudDone(bud, callback);
            },
            function (bud, callback) {
                s._writeBudOut(bud, callback);
            }
        ], callback);
    },
    /**
     * Render bud data.
     * @param {module:coz/lib/bud~Bud} bud - Bud to render.
     * @param {function} callback - Callback when done.
     * @private
     */
    _renderBudOut: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var out, error;
            try {
                out = bud.tmpl(bud.data || {});
            } catch (catched) {
                error = new Error('[BudWriter] Failed to render file: "' + bud.path + '"\n Error:' + catched);
            } finally {
                bud.out = out;
                callback(error, bud);
            }
        }, callback);
    },
    /**
     * Check bud done or not.
     * @param {module:coz/lib/bud~Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _checkBudDone: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var filename = bud.path;
            file.readFile(filename, function (err, existing) {
                var unknown = (!!err) || (!existing);
                if (unknown) {
                    bud.done = false;
                    callback(null, bud);
                    return
                }
                var skip = !bud.force && !!existing;
                if (skip) {
                    bud.done = true;
                    callback(null, bud);
                } else {
                    bud.done = String(existing) === String(bud.out);
                    callback(null, bud);
                }
            });
        }, callback);
    },
    /**
     * Write bud out into file.
     * @param {module:coz/lib/bud~Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _writeBudOut: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var done = bud.done;
            if (done) {
                callback(null, bud);
                return;
            }
            var filename = bud.path;
            file.writeFile(filename, bud.out, {
                mkdirp: bud.mkdirp,
                mode: bud.mode,
                force: true
            }, function (err) {
                bud.at = new Date();
                callback(err, bud);
            });
        }, callback);
    }
};

module.exports = BudWriter;

/**
 * Callback for bud write.
 * @memberof module:coz/lib/bud
 * @inner
 * @callback writeCallback
 * @param {?Error} err - Write error.
 * @param {module:coz/lib/bud~Bud} bud - Written bud.
 */