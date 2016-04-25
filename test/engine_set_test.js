/**
 * Test case for EngineSet.
 * Runs with nodeunit.
 */
'use strict'

const EngineSet = require('../lib/sets/engine_set.js')
const assert = require('assert')

it('Define an engine.', (done) => {
  let engine = EngineSet._newEngine({
    compile: function () {
    }
  }, 'foo')
  done()
})

it('Register and resolve engines.', (done) => {
  let engineSet = new EngineSet()
  engineSet.registerEngine('foo', {
    compile: function () {
    }
  })
  assert.throws(function () {
    engineSet.registerEngine('foo', {
      $isEngine: true
    })
  }, 'Try to register duplicate name.')

  assert.ok(engineSet.resolveEngine('foo'))
  done()
})

/* global describe, it */
