/**
 * Utility modules.
 * @module coz/lib/util
 */

"use strict";

module.exports = {
    /**
      * @see {@link module:coz/lib/util/compiling}
      */
    get compiling() { return require('./compiling'); },
    /**
      * @see {@link module:coz/lib/util/copying}
      */
    get copying() { return require('./copying'); },
    /**
      * @see {@link module:coz/lib/util/file}
      */
    get file() { return require('./file'); },
    /**
      * @see {@link module:coz/lib/util/filtering}
      */
    get filtering() { return require('./filtering'); },
    /**
      * @see {@link module:coz/lib/util/logging}
      */
    get logging() { return require('./logging'); },
    /**
      * @see {@link module:coz/lib/util/minifying}
      */
    get minifying() { return require('./minifying'); },
    /**
      * @see {@link module:coz/lib/util/sorting}
      */
    get sorting() { return require('./sorting'); },
    /**
      * @see {@link module:coz/lib/util/string}
      */
    get string() { return require('./string'); }
};