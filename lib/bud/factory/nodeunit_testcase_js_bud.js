/**
 * Bud for nodeunit testcase.
 * @memberof module:coz/lib/bud/factory
 * @function nodeunitTestcaseJsBud
 * @param {object} config - Nodeunit testcase configuration.
 * @param {string|string[]} config.src - Source file name pattern.
 * @param {string} [config.dest] - Destination directory path.
 * @returns {module:coz/lib/bud~Bud} - Bud for nodeunit testcase.
 */

"use strict";

var core = require('../../core'),
    ext = require('../../ext'),
    glob = ext.glob,
    path = core.path,
    assert = core.assert,
    Bud = require('../../bud/bud');

/** @lends nodeunitTestcaseJsBud */
function nodeunitTestcaseJsBud(config) {
    var src = config.src,
        dest = config.dest || process.cwd();
    assert.ok(!!src, 'config.src is required.');
    return [].concat(src)
        .map(function (src) {
            return glob.sync(path.resolve(src));
        })
        .reduce(function (result, cur) {
            return result.concat(cur);
        }, [])
        .filter(function (src) {
            return path.basename(src) !== 'index.js';
        })
        .filter(function (src) {
            return !/^[\._\-]/.test(path.basename(src));
        })
        .filter(function (src) {
            try {
                require.resolve(src);
                return true;
            } catch (e) {
                return false;
            }
        })
        .map(function (src) {
            var basename = path.basename(src, path.extname(src));
            return {
                force: false,
                mode: '644',
                mkdirp: false,
                tmpl: 'nodeunitTestcasejsTmpl',
                path: path.resolve(dest, basename + '_test.js'),
                data: {
                    name: basename,
                    relative: path.relative(dest, src)
                }
            }
        });
}

module.exports = nodeunitTestcaseJsBud;