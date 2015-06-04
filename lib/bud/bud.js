/**
 * Bud object.
 * Contains template and data, generate a single file.
 * @constructor Bud
 * @memberof module:planter/lib/bud
 * @param {BudConfig} config - Bud configuration
 * @param {mode}
 */


"use strict";

var ext = require('../ext'),
    tmpls = require('../tmpls'),
    BudConfig = require('./bud_config'),
    resolvers = require('../resolvers'),
    file = require('../util/file'),
    async = ext.async,
    TmplResolver = resolvers.TmplResolver,
    HelperResolver = resolvers.HelperResolver,
    EngineResolver = resolvers.EngineResolver;

/** @lends Bud */
function Bud() {
    var s = this;
    s.init.apply(s, arguments);
}
Bud.tmpls = tmpls;
Bud.prototype = {

    // --------------------
    // Public properties.
    // --------------------

    /**
     * Initialize a bud file.
     */
    init: function (config) {
        var s = this;
        s.config = new BudConfig(config);
        s.engineResolver = new EngineResolver();
        s.helperResolver = new HelperResolver();
        s.tmplResolver = new TmplResolver();
    },
    /** Resolver for engine. */
    engineResolver: undefined,
    /** Resolver for tmpl. */
    tmplResolver: undefined,
    /** Resolver for helper. */
    helperResolver: undefined,
    /** Bud configuration. */
    config: undefined,
    /**
     * Prepare bud.
     * @param {budPrepareCallback} callback - Callback when done.
     */
    prepare: function (callback) {
        var s = this;
        callback = callback || new Function();
        if (s._prepared) {
            callback(new Error('Already prepared!'));
            return;
        }
        var config = s.config;
        s._prepared = true;
        s.engineResolver.basedir(config.cwd);
        s.tmplResolver.basedir(config.cwd);
        s.helperResolver.basedir(config.cwd);
        callback(null, this);
    },
    /**
     * Compile template.
     * @param {budCompileCallback} callback - Callback when done.
     */
    compile: function (callback) {
        var s = this;
        callback = callback || new Function();
        if (!s._prepared) {
            callback(new Error('Needs prepare before compile.'));
            return;
        }
        if (s._compiled) {
            callback(new Error('Already compiled!'));
            return;
        }
        var config = s.config;
        var tmpl = s.tmplResolver.resolve(config.tmpl);
        if (!tmpl) {
            callback(new Error('Template not found:' + config.tmpl));
            return;
        }
        var engine = s.engineResolver.resolve(config.engine);
        if (!engine) {
            callback(new Error('Engine not found:' + config.engine));
            return;
        }
        var helpers = s.helperResolver.all();
        engine(tmpl, helpers, function (err, tmpl) {
            s._compiled = true;
            s.tmpl = tmpl;
            callback(err, s);
        });
    },
    /**
     * Write out to file.
     * @param {budWriteoutCallback} callback
     */
    writeout: function (callback) {
        var s = this;
        callback = callback || new Function();
        if (!s._compiled) {
            callback(new Error('Needs compile before writeout.'));
            return;
        }
        var config = s.config;
        s._written = null;

        async.waterfall([
            function (callback) {
                s._render(config.data, callback);
            },
            function (content) {
                var filename = config.path;
                s._needsWrite(filename, content, function (needsWrite) {
                    if (needsWrite) {
                        file.writeFile(filename, content, {
                            mkdirp: config.mkdirp,
                            mode: config.mode,
                            force: config.force
                        }, function (err) {
                            s._written = content;
                            callback(err);
                        });
                    } else {
                        s._written = null;
                        callback(null);
                    }
                });
            }
        ], function (err) {
            callback(err, s);
        });
    },
    /**
     * Get last time written content.
     * @returns {string}
     */
    writtenLastTime: function () {
        var s = this;
        return s._written;
    },

    // --------------------
    // Private properties.
    // --------------------
    /**
     * Prepared or not.
     * @private
     * @type {boolean}
     */
    _prepared: false,
    /**
     * Compiled or not.
     * @private
     * @type {boolean}
     */
    _compiled: false,
    /**
     * Written content.
     * @private
     * @type {string}
     */
    _written: undefined,
    /**
     * Render a template.
     * @private
     * @function
     * @param data
     * @param callback
     */
    _render: function (data, callback) {
        var s = this;
        if (!s._compiled) {
            callback(new Error('Needs compile.'));
            return;
        }
        try {
            var content = s.tmpl(data);
            callback(content);
        } catch (e) {
            callback(e);
        }
    },
    /**
     * Check needs to write or not.
     * @param {string} filename - Name of file to check.
     * @param {string} writing - Contents to write.
     * @param {function} callback - Callback when done.
     * @private
     */
    _needsWrite: function (filename, writing, callback) {
        file.readFile(filename, function (err, existing) {
            var unknown = (!!err) || (!existing);
            if (unknown) {
                callback(false);
            } else {
                callback(String(existing) !== String(writing));
            }
        });
    }

};

module.exports = Bud;


/**
 * Callback for bud prepare.
 * @callback budPrepareCallback
 * @param {error} err - Compile error.
 * @param {function} bud - Prepared bud
 */

/**
 * Callback for bud compile.
 * @callback budCompileCallback
 * @param {error} err - Compile error.
 * @param {function} bud - Compiled bud
 */

/**
 * Callback for bud writeout.
 * @callback budWriteoutCallback
 * @param {error} err - Writeout error.
 * @param {function} bud - Compiled bud
 * @param {boolean} executed - Executed or not. False when file already exists and contents are identical.
 */