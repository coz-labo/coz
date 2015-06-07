/**
 * Bud for index.js
 * @memberof module:coz/lib/bud/factory
 * @function indexJsBud
 * @param {object} config - Index js configuration.
 * @param {string} config.dirname - Directory name.
 * @param {object} [config.doc] - Document annotations.
 * @param {object} [config.memberDocs] - Document annotations for each member.
 * @returns {module:coz/lib/bud~Bud} - Bud for index.js
 */

"use strict";

var core = require('../../core'),
    ext = require('../../ext'),
    minimatch = ext.minimatch,
    sorting = require('../../util/sorting'),
    filtering = require('../../util/filtering'),
    string = require('../../util/string'),
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
            doc: config.doc || {},
            get modules() {
                var memberDocs = config.memberDocs || {};
                return fs.readdirSync(dirname)
                    .sort(sorting.stringSort())
                    .filter(filtering.patternReject(/^[\._]/))
                    .filter(filtering.patternReject(/^index\.js$/))
                    .map(function (filename) {
                        try {
                            var name = path.basename(filename, path.extname(filename));
                            return {
                                doc: memberDocs[name] || memberDocs[string.pascalcase(name)],
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
indexJsBud._isPascal = function (pattern, filename) {
    if (!pattern) {
        return false;
    }
    return minimatch(filename, pattern) ||
        minimatch(path.basename(filename), pattern) ||
        minimatch(path.basename(filename, path.extname(filename)), pattern);
};

module.exports = indexJsBud;

