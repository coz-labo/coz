/**
 * Bud file writer.
 * @memberof coz/lib/bud
 * @constructor BudWriter
 */
"use strict";


var core = require('../core'),
    ext = require('../ext'),
    path = core.path,
    fs = core.fs,
    async = ext.async,
    Bud = require('./bud'),
    file = require('../util/file'),
    _concatBuds = require('./_concat_buds'),
    template = require('../template');

/** @lends BudWriter */
function BudWriter() {
    var s = this;
}

BudWriter.prototype = {
    /**
     * Write bud.
     * @param {Bud} bud - Bud to write.
     * @param {budWriterWriteCallback} callback - Callback when done.
     */
    write: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(Bud.new);
        async.waterfall([
            function (callback) {
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
     * @param {Bud} bud - Bud to render.
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
                error = new Error('[BudWriter]Failed to render with error:' + catched);
            } finally {
                bud.out = out;
                callback(error, bud);
            }
        }, callback);
    },
    /**
     * Check bud done or not.
     * @param {Bud} bud - Bud to work with.
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
     * @param {Bud} bud - Bud to work with.
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
 * @memberof coz/lib/bud
 * @callback budWriterWriteCallback
 * @param {Error} err - Bud write error.
 * @param {Bud} bud - Compiled bud.
 */