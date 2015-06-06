/**
 * This module provides interfaces working with file template systems.
 * They are designed to be extensible and you can register own template engine and helpers.
 * @module leaf/lib/template
 */

"use strict";

module.exports = {
    get engines() { return require('./engines'); },
    get resolveEngine() { return require('./resolve_engine'); },
    get resolveTmpl() { return require('./resolve_tmpl'); },
    get tmpls() { return require('./tmpls'); }
};