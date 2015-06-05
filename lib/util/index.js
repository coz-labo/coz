/**
 * Utility modules.
 * @module leaf/lib/util
 * @property compiling {object} - {@link module:leaf/lib/util.compiling|compiling module}.
 * @property copying {object} - {@link module:leaf/lib/util.copying|copying module}.
 * @property file {object} - {@link module:leaf/lib/util.file|file module}.
 * @property filtering {object} - {@link module:leaf/lib/util.filtering|filtering module}.
 * @property logging {object} - {@link module:leaf/lib/util.logging|logging module}.
 * @property sorting {object} - {@link module:leaf/lib/util.sorting|sorting module}.
 * @property string {object} - {@link module:leaf/lib/util.string|string module}.
 */

"use strict";

module.exports = {
    get compiling() { return require('./compiling'); },
    get copying() { return require('./copying'); },
    get file() { return require('./file'); },
    get filtering() { return require('./filtering'); },
    get logging() { return require('./logging'); },
    get sorting() { return require('./sorting'); },
    get string() { return require('./string'); }
};