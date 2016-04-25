/**
 * Test case for EngineSet.
 * Runs with nodeunit.
 */
'use strict'
const EngineSet = require('../lib/sets/engine_set.js')

exports[ 'Define an engine.' ] = function (test) {
  let engine = EngineSet._newEngine({
    compile: function () {
    }
  }, 'foo')
  test.done()
}

exports[ 'Register and resolve engines.' ] = function (test) {
  let engineSet = new EngineSet()
  engineSet.registerEngine('foo', {
    compile: function () {
    }
  })
  test.throws(function () {
    engineSet.registerEngine('foo', {
      $isEngine: true
    })
  }, 'Try to register duplicate name.')

  test.ok(engineSet.resolveEngine('foo'))
  test.done()
}

