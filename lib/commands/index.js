/**
 * Commands invoked via bin script.
 * @module coz/lib/commands
 * @see module:coz/lib
 */

'use strict'

const d = (module) => module && module.default || module

const clean = d(require('./clean'))
const render = d(require('./render'))

module.exports = {
  clean,
  render
}
