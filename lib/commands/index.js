/**
 * Commands invoked via bin script.
 * @module coz/lib/commands
 * @see module:coz/lib
 */

"use strict";

module.exports = {
    get clean() { return require('./clean'); },
    get render() { return require('./render'); }
};