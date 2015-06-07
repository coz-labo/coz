/**
 * @fileOverview Flexible generator, which makes your project clean and maintainable.
 * @version 1.0.3
 * @module coz
 * @author Taka Okunishi
 * @license MIT
 * @requires {@link https://www.npmjs.org/package/async|async@^1.2.0}
 * @requires {@link https://www.npmjs.org/package/cli-color|cli-color@^1.0.0}
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.8.1}
 * @requires {@link https://www.npmjs.org/package/glob|glob@^5.0.10}
 * @requires {@link https://www.npmjs.org/package/handlebars|handlebars@^3.0.3}
 * @requires {@link https://www.npmjs.org/package/minimatch|minimatch@^2.0.8}
 * @requires {@link https://www.npmjs.org/package/mkdirp|mkdirp@^0.5.1}
 * @requires {@link https://www.npmjs.org/package/uglify-js|uglify-js@^2.4.23}
 */

"use strict";

var Coz = require('./coz');

var coz = module.exports = new Coz();

//---------------------
// Classes
//---------------------
coz.Coz = Coz;

//---------------------
// Sub modules
//---------------------
/**
 * Module to handle bud files.
 * @name {@link module:coz/lib/bud|bud}
 * @memberof module:coz
 * @see module:coz/lib/bud
 */
coz.bud = require('./bud');

/**
 * Module to handle templates.
 * @name {@link module:coz/lib/template|template}
 * @memberof module:coz
 * @see module:coz/lib/bud
 */
coz.template = require('./template');

/**
 * Module for utility functions.
 * @name {@link module:coz/lib/util|util}
 * @memberof module:coz
 * @see module:coz/lib/bud
 */
coz.util = require('./util');



//---------------------
// Aliases
//---------------------
/**
 * This is an alias for coz.util.string
 * @name {@link module:coz/lib/util/string|string}
 * @memberof module:coz
 * @see module:coz/lib/util/string
 */
coz.string = coz.util.string;

/**
 * This is an alias for coz.util.file
 * @name {@link module:coz/lib/util/file|file}
 * @memberof module:coz
 * @see module:coz/lib/util/file
 */
coz.file = coz.util.file;

/**
 * This is an alias for coz.bud.factory
 * @name {@link module:coz/lib/bud/factory|factory}
 * @memberof module:coz
 * @see module:coz/lib/bud/factory
 */
coz.factory = coz.bud.factory;

