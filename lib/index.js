/**
 * @overview Flexible generator, which makes your project clean and maintainable.
 * @version 3.0.10
 * @module coz
 * @author {@link http://okunishitaka.com|Taka Okunishi}
 * @license {@link MIT|}
 * @borrows module:coz~Coz#render as render
 * @borrows module:coz~Coz#clean as clean
 * @see http://coz-repo.github.io/coz/homepage
 * @requires {@link https://www.npmjs.org/package/argx|argx@^1.1.6}
 * @requires {@link https://www.npmjs.org/package/arrayfilter|arrayfilter@^1.0.8}
 * @requires {@link https://www.npmjs.org/package/arraysort|arraysort@^1.0.2}
 * @requires {@link https://www.npmjs.org/package/async|async@^1.4.2}
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.8.1}
 * @requires {@link https://www.npmjs.org/package/coz-bud|coz-bud@^1.0.1}
 * @requires {@link https://www.npmjs.org/package/coz-bud-compiler|coz-bud-compiler@^1.0.1}
 * @requires {@link https://www.npmjs.org/package/coz-bud-loader|coz-bud-loader@^1.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-bud-remover|coz-bud-remover@^1.0.1}
 * @requires {@link https://www.npmjs.org/package/coz-bud-writer|coz-bud-writer@^1.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-engine|coz-engine@^1.0.3}
 * @requires {@link https://www.npmjs.org/package/coz-handlebars-engine|coz-handlebars-engine@^1.0.1}
 * @requires {@link https://www.npmjs.org/package/coz-logger|coz-logger@^1.0.2}
 * @requires {@link https://www.npmjs.org/package/expandglob|expandglob@^1.0.0}
 * @requires {@link https://www.npmjs.org/package/extend|extend@^3.0.0}
 * @requires {@link https://www.npmjs.org/package/mkdirp|mkdirp@^0.5.1}
 * @requires {@link https://www.npmjs.org/package/stringcase|stringcase@^1.2.4}
 */

"use strict";

var Coz = require('./coz');

var coz = new Coz();
coz.version = '3.0.10';
coz.Coz = Coz;

module.exports = coz;