/**
 * Utility modules.
 * @module kyo/lib/util
 * @property compiling {object} - {@link module:kyo/lib/util/compiling|compiling module}.
 * @property copying {object} - {@link module:kyo/lib/util/copying|copying module}.
 * @property file {object} - {@link module:kyo/lib/util/file|file module}.
 * @property filtering {object} - {@link module:kyo/lib/util/filtering|filtering module}.
 * @property logging {object} - {@link module:kyo/lib/util/logging|logging module}.
 * @property minifying {object} - {@link module:kyo/lib/util/minifying|minifying module}.
 * @property sorting {object} - {@link module:kyo/lib/util/sorting|sorting module}.
 * @property string {object} - {@link module:kyo/lib/util/string|string module}.
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