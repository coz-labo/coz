/**
 * @overview Flexible generator, which makes your project clean and maintainable.
 * @version 3.1.4
 * @module coz
 * @author {@link http://okunishitaka.com|Taka Okunishi}
 * @license {@link MIT|}
 * @borrows module:coz~Coz#render as render
 * @borrows module:coz~Coz#clean as clean
 * @see http://coz-repo.github.io/coz/homepage
 * @requires {@link https://www.npmjs.org/package/argx|argx@*}
 * @requires {@link https://www.npmjs.org/package/arrayfilter|arrayfilter@*}
 * @requires {@link https://www.npmjs.org/package/arraysort|arraysort@*}
 * @requires {@link https://www.npmjs.org/package/async|async@*}
 * @requires {@link https://www.npmjs.org/package/commander|commander@*}
 * @requires {@link https://www.npmjs.org/package/coz-bud|coz-bud@*}
 * @requires {@link https://www.npmjs.org/package/coz-bud-compiler|coz-bud-compiler@*}
 * @requires {@link https://www.npmjs.org/package/coz-bud-loader|coz-bud-loader@*}
 * @requires {@link https://www.npmjs.org/package/coz-bud-remover|coz-bud-remover@*}
 * @requires {@link https://www.npmjs.org/package/coz-bud-writer|coz-bud-writer@*}
 * @requires {@link https://www.npmjs.org/package/coz-engine|coz-engine@*}
 * @requires {@link https://www.npmjs.org/package/coz-handlebars-engine|coz-handlebars-engine@*}
 * @requires {@link https://www.npmjs.org/package/coz-logger|coz-logger@*}
 * @requires {@link https://www.npmjs.org/package/expandglob|expandglob@*}
 * @requires {@link https://www.npmjs.org/package/extend|extend@*}
 * @requires {@link https://www.npmjs.org/package/mkdirp|mkdirp@*}
 * @requires {@link https://www.npmjs.org/package/stringcase|stringcase@*}
 */

"use strict";

var Coz = require('./coz'),
    create = require('./create'),
    pkg = require('../package.json');

var coz = create({});
coz.version = pkg.version;
coz.create = create;
coz.Coz = Coz;

module.exports = coz;