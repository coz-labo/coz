/**
 * This module provides interfaces working with file template systems.
 * They are designed to be extensible and you can register own template engine and helpers.
 * @module coz/lib/template
 * @property buildinEngines {object} - {@link module:coz/lib/template/buildinEngines|buildinEngines module}.
 * @property buildinTmpls {object} - {@link module:coz/lib/template/buildinTmpls|buildinTmpls module}.
 * @property engineSet {object} - {@link coz/lib/template.engineSet|engineSet module}.
 * @property engine {object} - {@link coz/lib/template.engine|engine module}.
 * @property tmplSet {object} - {@link coz/lib/template.tmplSet|tmplSet module}.
 */

"use strict";

module.exports = {
    get buildinEngines() { return require('./buildin_engines'); },
    get buildinTmpls() { return require('./buildin_tmpls'); },
    get EngineSet() { return require('./engine_set'); },
    get engine() { return require('./engine'); },
    get TmplSet() { return require('./tmpl_set'); }
};