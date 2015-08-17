/**
 * Utility modules.
 * @module coz/lib/util
 * @see module:coz/lib
 */

"use strict";

module.exports = {
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
    get flow() { return require('./flow'); },
    get requiring() { return require('./requiring'); }
};