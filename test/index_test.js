/**
 * Test case for index.
 * Runs with nodeunit.
 */

'use strict'

const coz = require('../lib')

exports[ 'Eval index.' ] = function (test) {
  test.ok(coz)

  Object.keys(coz).forEach(function (key) {
    test.ok(coz[ key ])
  })

  test.done()
}
