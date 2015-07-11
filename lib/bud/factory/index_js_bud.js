/**
 * Bud for index.js
 * @memberof module:coz/lib/bud/factory
 * @function indexJsBud
 * @param {object} config - Index js configuration.
 * @param {string} config.dirname - Directory name.
 * @param {object} [config.doc] - Document annotations.
 * @param {string} [config.parentmodule] - Name of parent module.
 * @param {string[]} [config.submodules] - Name of members as submodule.
 * @param {string[]} [config.subclasses] - Name of members as subclasses
 * @returns {module:coz/lib/bud~Bud} - Bud for index.js
 */

"use strict";

var core = require('../../core'),
    EOL = core.os.EOL,
    ext = require('../../ext'),
    sorting = require('../../util/sorting'),
    filtering = require('../../util/filtering'),
    string = ext.stringcase,
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
            END_BRACE: '}',
            desc: [].concat(config.desc || []).join(EOL + ' * '),
            module: config.module,
            parentmodule: [].concat(config.parentmodule || []),
            get modules() {
                var submodules = [].concat(config.submodules || []),
                    subclasses = [].concat(config.subclasses || []);
                return fs.readdirSync(dirname)
                    .sort(sorting.stringSort())
                    .filter(filtering.patternReject(/^[\._]/))
                    .filter(filtering.patternReject(/^index\.js$/))
                    .filter(function (filename) {
                        try {
                            require.resolve(path.resolve(dirname, filename));
                            return true;
                        } catch (e) {
                            return false;
                        }
                    })
                    .map(function (filename) {
                        try {
                            var name = path.basename(filename, path.extname(filename));
                            return {
                                name: name,
                                requireName: name.split(/\./g).map(string.snakecase).join('.'),
                                isSubmodules: ~submodules.indexOf(string.camelcase(name)),
                                isSubclass: ~subclasses.indexOf(string.camelcase(name)) || ~subclasses.indexOf(string.pascalcase(name))
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


module.exports = indexJsBud;

