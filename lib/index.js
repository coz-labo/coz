/**
 * @overview Flexible generator, which makes your project clean and maintainable.
 * @version 1.0.17
 * @module coz
 * @author {@link http://okunishitaka.com|Taka Okunishi}
 * @license {@link |}
 * @borrows module:coz~Coz#render as render
 * @borrows module:coz~Coz#clean as clean
 * @see http://okunishinishi.github.io/coz/homepage
 * @requires {@link https://www.npmjs.org/package/async|async@^1.2.0}
 * @requires {@link https://www.npmjs.org/package/cli-color|cli-color@^1.0.0}
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.8.1}
 * @requires {@link https://www.npmjs.org/package/glob|glob@^5.0.10}
 * @requires {@link https://www.npmjs.org/package/handlebars|handlebars@^3.0.3}
 * @requires {@link https://www.npmjs.org/package/minimatch|minimatch@^2.0.8}
 * @requires {@link https://www.npmjs.org/package/mkdirp|mkdirp@^0.5.1}
 * @requires {@link https://www.npmjs.org/package/uglify-js|uglify-js@^2.4.23}
 * @requires {@link https://www.npmjs.org/package/unorm|unorm@^1.3.3}
 */

"use strict";

var Coz = require('./coz');

var coz = module.exports = new Coz();
coz.version = '1.0.17';

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
 * @see module:coz/lib/template
 */
coz.template = require('./template');

/**
 * Module for utility functions.
 * @name {@link module:coz/lib/util|util}
 * @memberof module:coz
 * @see module:coz/lib/util
 */
coz.util = require('./util');

/**
 * External modules installed via npm.
 * @name {@link module:coz/lib/ext|ext}
 * @memberof module:coz
 * @see module:coz/lib/ext
 */
coz.ext = require('./ext');

/**
 * Nodejs build modules.
 * @name {@link module:coz/lib/core|core}
 * @memberof module:coz
 * @see module:coz/lib/core
 */
coz.core = require('./core');


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


