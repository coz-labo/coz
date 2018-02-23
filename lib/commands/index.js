/**
 * Commands invoked via bin script.
 * @module coz/lib/commands
 * @see module:coz/lib
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get clean () { return d(require('./clean')) },
  get render () { return d(require('./render')) }
}
