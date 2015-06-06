/**
 * Bud object.
 * Contains template and data, generate a single file.
 * @memberof module:leaf/lib/printer
 * @constructor Printer
 * @param {BudConfig} config - Bud configuration
 * @param {mode}
 */

"use strict";


var ext = require('../ext'),
    core = require('../core'),
    fs = core.fs,
    path = core.path,
    template = require('../template'),
    BudConfig = require('./bud_config'),
    file = require('../util/file'),
    async = ext.async;

/** @lends Printer */
function Printer() {
    var s = this;
    s.init.apply(s, arguments);
}
Printer.prototype = {

    // --------------------
    // Public properties.
    // --------------------

    /**
     * Initialize a bud file.
     */
    init: function (config) {
        var s = this;
        if (config.config) {
            config = config.config;
        }
        s.config = new BudConfig(config);
    },
    /** Bud configuration. */
    config: undefined,
    /**
     * Compile template.
     * @param {printerCompileCallback} callback - Callback when done.
     */
    compile: function (callback) {
        var s = this;
        callback = callback || new Function();
        if (s._compiled) {
            callback(new Error('Already compiled!'));
            return;
        }
        var config = s.config;
        var tmpl = template.resolveTmpl(config.tmpl);
        tmpl = s._readTemplate(config.cwd, tmpl || config.tmpl);
        if (!tmpl) {
            callback(new Error('Template not found:' + config.tmpl));
            return;
        }
        var Engine = template.resolveEngine(config.engine);
        if (!Engine) {
            callback(new Error('Engine not found:' + config.engine));
            return;
        }
        var engine = new Engine({});
        async.waterfall([
            function (callback) {
                switch (typeof(tmpl)) {
                    case 'function':
                        callback(null, tmpl);
                        break;
                    default:
                        engine.compile(tmpl, callback);
                        break;
                }
            }
        ], function (err, tmpl) {
            s._compiled = true;
            s.tmpl = tmpl;
            callback(err, s);
        });
    },
    /**
     * Write out to file.
     * @param {printerWriteoutCallback} callback
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
            function render(callback) {
                s._render(config.data, callback);
            },
            function write(content, callback) {
                var filename = path.resolve(config.cwd || process.cwd(), config.path);
                s._needsWrite(filename, content, config.force, function (needsWrite) {
                    if (needsWrite) {
                        file.writeFile(filename, content, {
                            mkdirp: config.mkdirp,
                            mode: config.mode,
                            force: true
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
            callback(null, content);
        } catch (e) {
            callback(e);
        }
    },
    /**
     * @deprecated
     * @private
     */
    _readTemplate: function (basedir, tmpl) {
        if (typeof(tmpl) === 'string') {
            var filename = path.resolve(basedir, tmpl);
            if (fs.existsSync(filename)) {
                try {
                    return String(fs.readFileSync(filename));
                } catch (e) {
                    return tmpl;
                }
            }
        }
        return tmpl;
    },
    /**
     * Check needs to write or not.
     * @param {string} filename - Name of file to check.
     * @param {string} writing - Contents to write.
     * @param {boolean} force - Force to write.
     * @param {function} callback - Callback when done.
     * @private
     */
    _needsWrite: function (filename, writing, force, callback) {
        file.readFile(filename, function (err, existing) {
            var unknown = (!!err) || (!existing);
            if (unknown) {
                callback(true);
            } else {
                var skip = !force && !!existing;
                if (skip) {
                    callback(false);
                } else {
                    callback(String(existing) !== String(writing));
                }
            }
        });
    }

};

module.exports = Printer;


/**
 * Callback for printer compile.
 * @callback printerCompileCallback
 * @param {error} err - Compile error.
 * @param {function} printer - Compiled printer
 */

/**
 * Callback for printer writeout.
 * @callback printerWriteoutCallback
 * @param {error} err - Writeout error.
 * @param {function} printer - Compiled printer
 * @param {boolean} executed - Executed or not. False when file already exists and contents are identical.
 */