/**
 * External modules, installed via {@link https://www.npmjs.com|npm}.
 * @module coz/lib/ext
 */

"use strict";

module.exports = {
    /**
     * This is an alias for {@link https://www.npmjs.org/package/async|async@^1.4.0} module.
     */
    get async() { return require('async'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/colorprint|colorprint@^1.0.7} module.
     */
    get colorprint() { return require('colorprint'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/commander|commander@^2.8.1} module.
     */
    get commander() { return require('commander'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/execcli|execcli@^2.1.0} module.
     */
    get execcli() { return require('execcli'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/glob|glob@^5.0.14} module.
     */
    get glob() { return require('glob'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/handlebars|handlebars@^3.0.3} module.
     */
    get handlebars() { return require('handlebars'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/mkdirp|mkdirp@^0.5.1} module.
     */
    get mkdirp() { return require('mkdirp'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/stringcase|stringcase@^1.0.7} module.
     */
    get stringcase() { return require('stringcase'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/unorm|unorm@^1.3.3} module.
     */
    get unorm() { return require('unorm'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/writeout|writeout@^1.0.3} module.
     */
    get writeout() { return require('writeout'); }
};