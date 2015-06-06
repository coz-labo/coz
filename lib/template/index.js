/**
 * This module provides interfaces working with file template systems.
 * They are designed to be extensible and you can register own template engine and helpers.
 * @module leaf/lib/template
 */

"use strict";

module.exports = {
    get engines() { return require('./engines'); },
    resolveEngine:require('./resolve_engine')
};