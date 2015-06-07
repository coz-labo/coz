/**
 * Utility modules.
 * @module coz/lib/util
 * @property compiling {object} - {@link module:coz/lib/util/compiling|compiling module}.
 * @property copying {object} - {@link module:coz/lib/util/copying|copying module}.
 * @property file {object} - {@link module:coz/lib/util/file|file module}.
 * @property filtering {object} - {@link module:coz/lib/util/filtering|filtering module}.
 * @property logging {object} - {@link module:coz/lib/util/logging|logging module}.
 * @property minifying {object} - {@link module:coz/lib/util/minifying|minifying module}.
 * @property sorting {object} - {@link module:coz/lib/util/sorting|sorting module}.
 * @property string {object} - {@link module:coz/lib/util/string|string module}.
 */

"use strict";

module.exports = {
    get compiling() { return require('./compiling'); },
    get copying() { return require('./copying'); },
    get file() { return require('./file'); },
    get filtering() { return require('./filtering'); },
    get logging() { return require('./logging'); },
    get minifying() { return require('./minifying'); },
    get sorting() { return require('./sorting'); },
    get string() { return require('./string'); }
};