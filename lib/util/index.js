/**
 * Utility modules.
 * @module coz/lib/util
 * @see module:coz/lib
 */

"use strict";

module.exports = {
    /**
     * @memberof module:coz/lib/util
     * @name {@link module:coz/lib/util/compiling|compiling}
     */
    get compiling() { return require('./compiling'); },
    /**
     * @memberof module:coz/lib/util
     * @name {@link module:coz/lib/util/copying|copying}
     */
    get copying() { return require('./copying'); },
    /**
     * @memberof module:coz/lib/util
     * @name {@link module:coz/lib/util/file|file}
     */
    get file() { return require('./file'); },
    /**
     * @memberof module:coz/lib/util
     * @name {@link module:coz/lib/util/filtering|filtering}
     */
    get filtering() { return require('./filtering'); },
    /**
     * @memberof module:coz/lib/util
     * @name {@link module:coz/lib/util/logging|logging}
     */
    get logging() { return require('./logging'); },
    /**
     * @memberof module:coz/lib/util
     * @name {@link module:coz/lib/util/minifying|minifying}
     */
    get minifying() { return require('./minifying'); },
    /**
     * @memberof module:coz/lib/util
     * @name {@link module:coz/lib/util/sorting|sorting}
     */
    get sorting() { return require('./sorting'); },
    /**
     * @memberof module:coz/lib/util
     * @name {@link module:coz/lib/util/string|string}
     */
    get string() { return require('./string'); }
};