/**
 * Bud for index.js
 * @memberof module:leaf/lib/factory/indexJsBud
 * @function indexJsBud
 * @param {object} config - Index js configuration.
 * @param {object} config.dirname - Directory name.
 * @param {object} config.doc - Document annotations.
 * @param {boolean} config.docProperties - Should doc property or not.
 * @returns {Bud} - Bud for index.js
 */

"use strict";

var core = require('../core'),
    ext = require('../ext'),
    sorting = require('../util/sorting'),
    filtering = require('../util/filtering'),
    async = ext.async,
    assert = core.assert,
    path = core.path,
    fs = core.fs;
var Bud = require('../printing/printer');

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
                    .filter(filtering.patternReject(/^[\.\_]/))
                    .filter(filtering.patternReject(/^index\.js$/))
                    .map(function (filename) {
                        try {
                            var module = require(path.resolve(dirname, filename));
                            return {
                                module: module,
                                name: path.basename(filename, path.extname(filename))
                            };
                        } catch (e) {
                            return null;
                        }
                    })
                    .filter(function (val) {
                        return !!val;
                    });
            }
        }
    });
}

module.exports = indexJsBud;

