/**
 * This module provides interfaces working with file template systems.
 * They are designed to be extensible and you can register own template engine and helpers.
 * @module coz/lib/template
 * @see module:coz/lib
 */

"use strict";

module.exports = {
    /**
     * @memberof module:coz/lib/template
     * @name {@link module:coz/lib/template/buildinEngines|buildinEngines}
     */
    get buildinEngines() { return require('./buildin_engines'); },
    get buildinHelpers() { return require('./buildin_helpers'); },
    /**
     * @memberof module:coz/lib/template
     * @name {@link module:coz/lib/template/buildinTmpls|buildinTmpls}
     */
    get buildinTmpls() { return require('./buildin_tmpls'); },
    /**
     * @memberof module:coz/lib/template
     * @name {@link module:coz/lib/template~EngineSet|EngineSet}
     */
    get EngineSet() { return require('./engine_set'); },
    /**
     * @memberof module:coz/lib/template
     * @name {@link module:coz/lib/template~TmplSet|TmplSet}
     */
    get TmplSet() { return require('./tmpl_set'); }
};