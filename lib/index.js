/**
 * @overview Flexible generator, which makes your project clean and maintainable.
 * @version 6.0.1
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
 * @requires {@link https://www.npmjs.org/package/co|co@^4.6.0}
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.9.0}
 * @requires {@link https://www.npmjs.org/package/coz-bud|coz-bud@^3.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-bud-compiler|coz-bud-compiler@^2.0.3}
 * @requires {@link https://www.npmjs.org/package/coz-bud-loader|coz-bud-loader@^2.0.3}
 * @requires {@link https://www.npmjs.org/package/coz-bud-remover|coz-bud-remover@^2.0.1}
 * @requires {@link https://www.npmjs.org/package/coz-bud-writer|coz-bud-writer@^2.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-engine|coz-engine@^2.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-handlebars-engine|coz-handlebars-engine@^3.0.0}
 * @requires {@link https://www.npmjs.org/package/coz-logger|coz-logger@^4.0.0}
 * @requires {@link https://www.npmjs.org/package/expandglob|expandglob@^3.0.2}
 */

'use strict'

const Coz = require('./coz')
const create = require('./create')
const pkg = require('../package.json')

let coz = create({})
coz.version = pkg.version
coz.create = create
coz.Coz = Coz

module.exports = coz
