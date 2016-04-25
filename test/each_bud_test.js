/**
 * Test case for eachBud.
 * Runs with nodeunit.
 */
'use strict'

const eachBud = require('../lib/each_bud.js')
const assert = require('assert')

before((done) => {
  done()
})

after((done) => {
  done()
})

it('Each bud', (done) => {
  eachBud(`${__dirname}/*.js`, (filename, callback) => {
    callback(null)
  }, function (err) {
    assert.ifError(err)
    done()
  })
})

/* global describe, before, after, it */
