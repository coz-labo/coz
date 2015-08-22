/**
 * Bud file compiler.
 * @memberof module:coz/lib/bud
 * @inner
 * @constructor BudCompiler
 * @param {object} config - Compiler configuration.
 * @param {EngineSet} config.engineSet - A engine set.
 * @param {EngineSet} config.tmplSet - A tmpl set.
 */

"use strict";

var core = require('../core'),
    ext = require('../ext'),
    path = core.path,
    async = ext.async,
    cozBud = require('coz-bud'),
    template = require('../template'),
    _asyncWithTimeout = require('./_async_with_timeout'),
    _nextTick = require('./_next_tick'),
    _concatBuds = require('./_concat_buds'),
    _resolveStringValue = require('./_resolve_string_value');

/** @lends module:coz/lib/bud~BudCompiler */
function BudCompiler(config) {
    config = config || {};
    var s = this;
    s.engineSet = config.engineSet || new template.EngineSet();
    s.tmplSet = config.tmplSet || new template.TmplSet();
}

BudCompiler.prototype = {
    /**
     * Compile bud.
     * @param {module:coz/lib/bud~Bud} bud - Bud to compile.
     * @param {module:coz/lib/bud~compileCallback} callback - Callback when done.
     */
    compile: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(cozBud.create);
        async.waterfall([
            function (callback) {
                _nextTick(bud, callback);
            },
            function (bud, callback) {
                s._prepareBudData(bud, callback);
            },
            function (bud, callback) {
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
     * Update bud data.
     * @param {module:coz/lib/bud~Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _prepareBudData: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var data = bud.data || {};
            if (typeof(data) === 'string') {
                var filename = path.resolve(bud.cwd, data);
                data = require(filename);
            }
            data.__proto__ = {};
            data.__proto__.$$bud = {
                cwd: bud.cwd,
                src: bud.src,
                path: bud.path
            };
            bud.data = data;
            callback(null, bud);
        }, callback);
    },
    /**
     * Update bud tmpl.
     * @param {module:coz/lib/bud~Bud} bud - Bud to work with.
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
            _resolveStringValue(tmpl, bud.cwd, function (err, tmpl) {
                bud.tmpl = tmpl;
                callback(err, bud);
            });
        }, callback);
    },
    /**
     * Update bud engine.
     * @param {module:coz/lib/bud~Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _prepareBudEngine: function (bud, callback) {
        var s = this;
        _concatBuds(bud, function (bud, callback) {
            var engine = bud.engine;
            var Engine = s.engineSet.resolveEngine(engine);
            if (Engine) {
                var setup = bud.setup || {};
                setup.basedir = bud.cwd;
                engine = new Engine(setup);
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
     * @param {module:coz/lib/bud~Bud} bud - Bud to work with.
     * @param {function} callback - Callback when done.
     * @private
     */
    _compileBudTmpl: function (bud, callback) {
        var s = this;
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
                            var timeout = engine.timeout || 2000;
                            _asyncWithTimeout(function (callback) {
                                engine.compile(tmpl, callback);
                            }, timeout, function (err, compiled) {
                                var timeoutError = !!(err && err.$isTimeout);
                                if (timeoutError) {
                                    console.log("Took too long with engine:", engine);
                                }
                                callback(err, compiled)
                            });
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
 * Callback for bud compiler.
 * @memberof module:coz/lib/bud
 * @inner
 * @callback compileCallback
 * @param {?Error} err - Bud compile error.
 * @param {module:coz/lib/bud~Bud} bud - Compiled bud.
 */