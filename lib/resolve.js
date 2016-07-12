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
const co = require('co')

/** @lends resolve */
function resolve (patterns) {
  return co(function * () {
    let result = []
    for (let pattern of [].concat(patterns || [])) {
      switch (typeof pattern) {
        case 'object':
          let fromObject = yield resolve.fromObject(pattern)
          result.push(...fromObject)
          break
        case 'function':
          let fromFunction = yield resolve.fromFunction(pattern)
          result.push(...fromFunction)
          break
        default:
          let fromString = yield resolve.fromString(pattern)
          result.push(...fromString)
          break
      }
    }
    return result.reduce((a, b) => [].concat(a, b), [])
  })
}

Object.assign(resolve, {
  fromObject (src) {
    return co(function * () {
      let bud = src // Actually a bud.
      bud.cwd = bud.cwd || _cwd()
      return [].concat(bud)
    })
  },
  fromFunction (src) {
    return co(function * () {
      let bud = yield src()
      return yield resolve(bud)
    })
  },
  fromString (src) {
    return co(function * () {
      let filenames = yield aglob(src)
      let notFound = (src.length > 0) && (filenames.length === 0)
      if (notFound) {
        console.warn('File not found with pattern:', [].concat(src))
      }
      return filenames
    })
  }
})

function _cwd () {
  let parent = module.parent
  return (parent && path.dirname(parent.filename)) || process.cwd()
}

module.exports = resolve
