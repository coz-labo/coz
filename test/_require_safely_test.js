/**
 * Test case for requireSafely.
 * Runs with nodeunit.
 */
'use strict'

const _requireSafely = require('../lib/_require_safely.js')
const assert = require('assert')

it('Require safely', (done) => {
  assert.ok(_requireSafely(__filename))
  assert.equal(_requireSafely('__not_existing__'), null)
  assert.equal(_requireSafely({}), null)
  assert.equal(null, null)
  done()
})

/* global describe, it */
