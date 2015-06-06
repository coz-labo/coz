/**
 * Commands invoked via bin script.
 * @module kyo/lib/commands
 * @property render {object} - {@link kyo/lib/commands.render|render module}.
 */

"use strict";

module.exports = {
    get render() { return require('./render'); }
};