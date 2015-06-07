/**
 * This module provides interfaces working with file template systems.
 * They are designed to be extensible and you can register own template engine and helpers.
 * @module coz/lib/template
 */

"use strict";

module.exports = {
    /**
      * @see {@link module:coz/lib/template/buildinEngines}
      */
    get buildinEngines() { return require('./buildin_engines'); },
    /**
      * @see {@link module:coz/lib/template/buildinTmpls}
      */
    get buildinTmpls() { return require('./buildin_tmpls'); },
    /**
     * @see {@link module:coz/lib/template~EngineSet}
     */
    get EngineSet() { return require('./engine_set'); },
    /**
     * @see {@link module:coz/lib/template~Engine}
     */
    get Engine() { return require('./engine'); },
    /**
     * @see {@link module:coz/lib/template~TmplSet}
     */
    get TmplSet() { return require('./tmpl_set'); }
};