/**
 * Bud file remover.
 * Removed rendered file by bud.
 * @memberof module:coz/lib/bud
 * @inner
 * @constructor BudRemover
 */
"use strict";


var core = require('../core'),
    ext = require('../ext'),
    async = ext.async,
    fs = core.fs,
    Bud = require('./bud'),
    file = require('../util/file'),
    _nextTick = require('./_next_tick'),
    _concatBuds = require('./_concat_buds');

/** @lends module:coz/lib/bud~BudRemover */
function BudRemover() {
    var s = this;
}

BudRemover.prototype = {
    /**
     * Remove files rendered by bud.
     * @param {module:coz/lib/bud~Bud} bud - Bud to work with.
     * @param {module:coz/lib/bud~removeCallback} callback - Callback when done.
     */
    remove: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(Bud.new);
        async.waterfall([
            function (callback) {
                _nextTick(bud, callback);
            },
            function (bud, callback) {
                s._removeBudRendered(bud, callback);
            }
        ], callback);
    },
    /**
     * Write bud out into file.
     * @param {module:coz/lib/bud~Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _removeBudRendered: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var filename = bud.path;
            fs.exists(filename, function (exists) {
                if (!exists) {
                    callback(null, bud);
                    return;
                }
                file.unlinkFile(filename, {
                    force: bud.force
                }, function (err) {
                    delete bud.at;
                    delete bud.out;
                    bud.done = false;
                    callback(err, bud);
                });
            });
        }, callback);
    }
};

module.exports = BudRemover;

/**
 * Callback for bud remove.
 * @memberof module:coz/lib/bud
 * @inner
 * @callback removeCallback
 * @param {?Error} err - Write error.
 * @param {module:coz/lib/bud~Bud} bud - Written bud.
 */