/**
 * Handle render command.
 * @memberof module:coz/lib/commands
 * @function render
 * @param {string} src - Source filename. Could be glob pattern.
 * @param {object} options - Optional settings.
 * @param {object} options.verbose - Log verbose.
 * @param {function} [callback] - Callback when done.
 */

'use strict'

const create = require('../create')
const fs = require('fs')

/** @lends render */
async function render (filename, options) {
  options = options || {}
  const coz = create(options.configuration)
  return await coz.render(filename, {
    verbose: !!options.verbose
  })
}

render.help = fs.readFileSync(`${__dirname}/helps/render-help.txt`, 'utf-8')

module.exports = render
