/**
 * External modules, installed via {@link https://www.npmjs.com|npm}.
 * @module coz/lib/ext
 */

"use strict";

module.exports = {
    /**
     * This is an alias for {@link https://www.npmjs.org/package/async|async@^1.2.0} module.
     */
    get async() { return require('async'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/cli-color|cli-color@^1.0.0} module.
     */
    get cliColor() { return require('cli-color'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/colorprint|colorprint@^1.0.3} module.
     */
    get colorprint() { return require('colorprint'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/commander|commander@^2.8.1} module.
     */
    get commander() { return require('commander'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/glob|glob@^5.0.10} module.
     */
    get glob() { return require('glob'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/handlebars|handlebars@^3.0.3} module.
     */
    get handlebars() { return require('handlebars'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/minimatch|minimatch@^2.0.8} module.
     */
    get minimatch() { return require('minimatch'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/mkdirp|mkdirp@^0.5.1} module.
     */
    get mkdirp() { return require('mkdirp'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/stringcase|stringcase@^1.0.2} module.
     */
    get stringcase() { return require('stringcase'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/uglify-js|uglify-js@^2.4.23} module.
     */
    get uglifyJs() { return require('uglify-js'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/unorm|unorm@^1.3.3} module.
     */
    get unorm() { return require('unorm'); }
};