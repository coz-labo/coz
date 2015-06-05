/**
 * Commands invoked via bin script.
 * @module leaf/lib/commands
 * @property render {object} - {@link module:leaf/lib/commands.render|render module}.
 */

"use strict";

module.exports = {
    get render() { return require('./render'); }
};