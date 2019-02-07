/**
 * Buildin templates.
 * @module coz/lib/buildin_tmpls
 */

'use strict'

const { sortProperties } = require('fmtjson')

module.exports = {
  json(data) {
    return JSON.stringify(sortProperties(data), null, 2)
  },
  text(data) {
    return String(data)
  }
}
