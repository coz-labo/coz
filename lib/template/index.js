/**
 * This module provides interfaces working with file template systems.
 * They are designed to be extensible and you can register own template engine and helpers.
 * @module leaf/lib/template
 */

"use strict";

module.exports = {
    get buildinEngines() { return require('./buildin_engines'); },
    get buildinTmpls() { return require('./buildin_tmpls'); },
    get EngineSet() { return require('./engine_set'); },
    get engine() { return require('./engine'); },
    get TmplSet() { return require('./tmpl_set'); }
};