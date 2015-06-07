/**
 * Commands invoked via bin script.
 * @module coz/lib/commands
 */

"use strict";

module.exports = {
    get helps() { return require('./helps'); },
    get render() { return require('./render'); }
};