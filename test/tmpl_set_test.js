/**
 * Test case for tmplSet.
 * Runs with nodeunit.
 */
'use strict'

const TmplSet = require('../lib/sets/tmpl_set.js')

exports[ 'Register and resolve tmpls.' ] = function (test) {
  let tmplSet = new TmplSet()
  tmplSet.registerTmpl('foo', function () {
  })
  test.throws(function () {
    tmplSet.registerTmpl('foo', function () {
    })
  }, 'Try to register duplicate name')
  test.ok(tmplSet.resolveTmpl(function () {
  }))
  test.ok(tmplSet.resolveTmpl('foo'))
  test.done()
}

