/**
 * Commands invoked via bin script.
 * @module coz/lib/commands
 * @see module:coz/lib
 */

'use strict'


const clean = require('./clean')
const render = require('./render')

exports.clean = clean
exports.render = render

module.exports = {
  clean,
  render
}
