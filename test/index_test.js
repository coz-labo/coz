/**
 * Test case for index.
 * Runs with nodeunit.
 */

'use strict'

const coz = require('../lib')
const assert = require('assert')

it('Eval index.', (done) => {
  assert.ok(coz)

  Object.keys(coz).forEach(function (key) {
    assert.ok(coz[ key ])
  })

  done()
})

/* global describe, it */
