/**
 * Commands invoked via bin script.
 * @module coz/lib/commands
 * @property render {object} - {@link coz/lib/commands.render|render module}.
 */

"use strict";

module.exports = {
    get render() { return require('./render'); }
};