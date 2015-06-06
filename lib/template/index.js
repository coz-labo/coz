/**
 * This module provides interfaces working with file template systems.
 * They are designed to be extensible and you can register own template engine and helpers.
 * @module kyo/lib/template
 * @property buildinEngines {object} - {@link module:kyo/lib/template/buildinEngines|buildinEngines module}.
 * @property buildinTmpls {object} - {@link module:kyo/lib/template/buildinTmpls|buildinTmpls module}.
 * @property engineSet {object} - {@link kyo/lib/template.engineSet|engineSet module}.
 * @property engine {object} - {@link kyo/lib/template.engine|engine module}.
 * @property tmplSet {object} - {@link kyo/lib/template.tmplSet|tmplSet module}.
 */

"use strict";

module.exports = {
    get buildinEngines() { return require('./buildin_engines'); },
    get buildinTmpls() { return require('./buildin_tmpls'); },
    get EngineSet() { return require('./engine_set'); },
    get engine() { return require('./engine'); },
    get TmplSet() { return require('./tmpl_set'); }
};