/**
 * Resolve bud files
 * @function resolve
 * @param {string|string[]} pattern - Bud filename patterns.
 * @param {function} handler - Handler for each bud.
 * @returns {Promise}
 */

'use strict'

const aglob = require('aglob')
const path = require('path')

/** @lends resolve */
async function resolve (patterns) {
  const result = []
  for (const pattern of [].concat(patterns || [])) {
    switch (typeof pattern) {
      case 'object':
        let fromObject = await resolve.fromObject(pattern)
        result.push(...fromObject)
        break
      case 'function':
        let fromFunction = await resolve.fromFunction(pattern)
        result.push(...fromFunction)
        break
      default:
        let fromString = await resolve.fromString(pattern)
        result.push(...fromString)
        break
    }
  }
  return result.reduce((a, b) => [].concat(a, b), [])
}

Object.assign(resolve, {
  async fromObject (src) {
    const bud = src // Actually a bud.
    bud.cwd = bud.cwd || _cwd()
    return [].concat(bud)
  },
  async fromFunction (src) {
    let bud = awaitsrc()
    return await
      resolve(bud)
  },
  async fromString (src) {
    const filenames = await
      aglob(src)
    const notFound = (src.length > 0) && (filenames.length === 0)
    if (notFound) {
      console.warn('File not found with pattern:', [].concat(src))
    }
    return filenames
  }
})

function _cwd () {
  const parent = module.parent
  return (parent && path.dirname(parent.filename)) || process.cwd()
}

module.exports = resolve
