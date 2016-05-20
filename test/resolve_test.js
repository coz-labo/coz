/**
 * Test case for resolve.
 * Runs with mocha.
 */
'use strict'

const resolve = require('../lib/resolve.js')
const assert = require('assert')
const co = require('co')

describe('resolve', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Resolve', () => co(function * () {
    let buds = yield resolve(`${__dirname}/*.js`)
    assert.ok(buds)
  }))
})

/* global describe, before, after, it */
