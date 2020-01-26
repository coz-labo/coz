/**
 * Test case for resolve.
 * Runs with mocha.
 */
'use strict'

const resolve = require('../lib/resolve.js')
const assert = require('assert')
describe('resolve', () => {

  it('Resolve', async () => {
    let buds = resolve(`${__dirname}/*.js`)
    assert.ok(buds)
  })
})

/* global describe, before, after, it */
