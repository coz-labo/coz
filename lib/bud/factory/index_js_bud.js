/**
 * Bud for index.js
 * @memberof module:coz/lib/bud/factory
 * @function indexJsBud
 * @param {object} config - Index js configuration.
 * @param {object} config.dirname - Directory name.
 * @param {object} config.doc - Document annotations.
 * @param {boolean} config.docProperties - Should doc property or not.
 * @returns {Bud} - Bud for index.js
 */

"use strict";

var core = require('../../core'),
    ext = require('../../ext'),
    minimatch = ext.minimatch,
    sorting = require('../../util/sorting'),
    filtering = require('../../util/filtering'),
    async = ext.async,
    assert = core.assert,
    path = core.path,
    fs = core.fs,
    Bud = require('../../bud/bud');

/** @lends indexJsBud */
function indexJsBud(config) {
    var dirname = config.dirname;
    assert.ok(!!dirname, 'config.dirname is required.');
    return new Bud({
        force: true,
        mode: '444',
        path: path.resolve(dirname, 'index.js'),
        mkdirp: false,
        tmpl: 'indexjs',
        data: {
            desc: config.desc,
            doc: config.doc,
            docProperties: config.docProperties,
            get modules() {
                return fs.readdirSync(dirname)
                    .sort(sorting.stringSort())
                    .filter(filtering.patternReject(/^[\._]/))
                    .filter(filtering.patternReject(/^index\.js$/))
                    .map(function (filename) {
                        try {
                            var module = require(path.resolve(dirname, filename)),
                                name = path.basename(filename, path.extname(filename));
                            return {
                                module: module,
                                isModule: indexJsBud._isModule(module),
                                name: name,
                                isPascal: indexJsBud._isPascal(config.pascalPattern, filename)
                            };
                        } catch (e) {
                            return null;
                        }
                    })
                    .filter(filtering.emptyReject());
            }
        }
    });
}
indexJsBud._isModule = function (module) {
    return typeof(module) === 'object';
};
indexJsBud._isPascal = function (pattern, filename) {
    if (!pattern) {
        return false;
    }
    return minimatch(filename, pattern) ||
        minimatch(path.basename(filename), pattern) ||
        minimatch(path.basename(filename, path.extname(filename)), pattern);
};

module.exports = indexJsBud;

