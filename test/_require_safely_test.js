/**
 * Test case for requireSafely.
 * Runs with nodeunit.
 */
'use strict'

const _requireSafely = require('../lib/_require_safely.js')

exports[ 'Require safely' ] = function (test) {
  test.ok(_requireSafely(__filename))
  test.equal(_requireSafely('__not_existing__'), null)
  test.equal(_requireSafely({}), null)
  test.equal(null, null)
  test.done()
}
