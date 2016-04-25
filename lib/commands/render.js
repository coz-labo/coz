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
const co = require('co')

/** @lends render */
function render (filename, options, callback) {
  options = options || {}
  let coz = create(options.configuration)
  return co(function * () {
    return yield coz.render(filename, {
      verbose: !!options.verbose
    }, callback)
  })
}

render.help = fs.readFileSync(__dirname + '/helps/render-help.txt', 'utf-8')

module.exports = render
