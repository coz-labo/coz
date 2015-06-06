/**
 * Bud file compiler.
 * @memberof leaf/lib/bud
 * @constructor BudCompiler
 * @param {object} config - Compiler configuration.
 * @param {EngineSet} config.engineSet - A engine set.
 * @param {EngineSet} config.tmplSet - A tmpl set.
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

/** @lends BudCompiler */
function BudCompiler(config) {
    config = config || {};
    var s = this;
    s.engineSet = config.engineSet || new template.EngineSet();
    s.tmplSet = config.tmplSet || new template.TmplSet();
}

BudCompiler.prototype = {
    /**
     * Compile bud.
     * @param {Bud} bud - Bud to compile.
     * @param {budCompilerCompileCallback} callback - Callback when done.
     */
    compile: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(Bud.new);
        async.waterfall([
            function (callback) {
                s._prepareBudTmpl(bud, callback);
            },
            function (bud, callback) {
                s._prepareBudEngine(bud, callback);
            },
            function (bud, callback) {
                var start = new Date;
                s._compileBudTmpl(bud, function (err, bud) {
                    callback(err, bud);
                });
            }
        ], function (err, bud) {
            callback(err, bud);
        });
    },
    /**
     * Update bud tmpl.
     * @param {Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _prepareBudTmpl: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var tmpl = bud.tmpl;
            var resolved = s.tmplSet.resolveTmpl(tmpl);
            if (resolved) {
                tmpl = resolved;
            }
            if (!tmpl) {
                callback(new Error('[BudCompiler]Template not found:' + bud.tmpl));
                return;
            }
            var isString = typeof(tmpl) === 'string';
            if (isString) {
                var src = path.resolve(bud.cwd, tmpl);
                file.readFile(src, function (err, read) {
                    if (!err && read) {
                        tmpl = read;
                    }
                    bud.tmpl = tmpl;
                    callback(null, bud);
                });
            } else {
                bud.tmpl = tmpl;
                callback(null, bud);
            }
        }, callback);
    },
    /**
     * Update bud engine.
     * @param {Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _prepareBudEngine: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var engine = bud.engine;
            var Engine = s.engineSet.resolveEngine(engine);
            if (Engine) {
                engine = new Engine({});
            }
            if (!engine) {
                callback(new Error('[BudCompiler]Engine not found:' + bud.engine));
                return;
            }
            bud.engine = engine;
            callback(null, bud);
        }, callback);
    },
    /**
     * Update bud data.
     * @param {Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _compileBudTmpl: function (bud, callback) {
        var s = this;
        var start = new Date();
        _concatBuds(bud, function (bud, callback) {
            var tmpl = bud.tmpl,
                engine = bud.engine;
            async.waterfall([
                function (callback) {
                    switch (typeof(tmpl)) {
                        case 'function':
                            // Already compiled.
                            callback(null, tmpl);
                            break;
                        default:
                            engine.compile(tmpl, callback);
                            break;
                    }
                }
            ], function (err, tmpl) {
                bud.tmpl = tmpl;
                callback(err, bud);
            });
        }, callback);
    }
};

module.exports = BudCompiler;


/**
 * @callback budCompilerCompileCallback
 * @param {Error} err - Bud compile error.
 * @param {Bud} bud - Compiled bud.
 */