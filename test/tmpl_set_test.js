/**
 * Test case for tmplSet.
 * Runs with nodeunit.
 */
'use strict'

const TmplSet = require('../lib/sets/tmpl_set.js')
const assert = require('assert')

it('Register and resolve tmpls.', (done) => {
  let tmplSet = new TmplSet()
  tmplSet.registerTmpl('foo', function () {
  })
  assert.throws(function () {
    tmplSet.registerTmpl('foo', function () {
    })
  }, 'Try to register duplicate name')
  assert.ok(tmplSet.resolveTmpl(function () {
  }))
  assert.ok(tmplSet.resolveTmpl('foo'))
  done()
})

/* global describe, it */
