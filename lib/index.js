/**
 * @overview Flexible generator, which makes your project clean and maintainable.
 * @version 4.0.5
 * @module coz
 * @author {@link http://okunishitaka.com|Taka Okunishi}
 * @license {@link MIT|}
 * @borrows module:coz~Coz#render as render
 * @borrows module:coz~Coz#clean as clean
 * @see http://coz-repo.github.io/coz/homepage
 * @requires {@link https://www.npmjs.org/package/argx|argx@^2.0.2}
 * @requires {@link https://www.npmjs.org/package/arrayfilter|arrayfilter@^1.1.2}
 * @requires {@link https://www.npmjs.org/package/arraysort|arraysort@^2.0.0}
 * @requires {@link https://www.npmjs.org/package/async|async@^1.5.2}
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.9.0}
 * @requires {@link https://www.npmjs.org/package/coz-bud|coz-bud@^2.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-bud-compiler|coz-bud-compiler@^2.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-bud-loader|coz-bud-loader@^1.1.0}
 * @requires {@link https://www.npmjs.org/package/coz-bud-remover|coz-bud-remover@^1.0.1}
 * @requires {@link https://www.npmjs.org/package/coz-bud-writer|coz-bud-writer@^1.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-engine|coz-engine@^1.0.4}
 * @requires {@link https://www.npmjs.org/package/coz-handlebars-engine|coz-handlebars-engine@^2.1.1}
 * @requires {@link https://www.npmjs.org/package/coz-logger|coz-logger@^3.1.1}
 * @requires {@link https://www.npmjs.org/package/expandglob|expandglob@^2.0.0}
 * @requires {@link https://www.npmjs.org/package/extend|extend@^3.0.0}
 * @requires {@link https://www.npmjs.org/package/mkdirp|mkdirp@^0.5.1}
 * @requires {@link https://www.npmjs.org/package/stringcase|stringcase@^2.0.1}
 */

"use strict";

const Coz = require('./coz'),
    create = require('./create'),
    pkg = require('../package.json');

let coz = create({});
coz.version = pkg.version;
coz.create = create;
coz.Coz = Coz;

module.exports = coz;