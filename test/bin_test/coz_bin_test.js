/**
 * Test case for bin/leaf
 * Runs with nodeunit.
 */

'use strict'

const bin = require.resolve('../../bin/coz'),
  childProcess = require('child_process')

exports[ 'Show help.' ] = function (test) {
  let spawned = childProcess.spawn(bin, [ '-h' ])
  //spawned.stdout.pipe(process.stdout)
  //spawned.stderr.pipe(process.stderr)
  spawned.on('exit', function () {
    test.done()
  })
}

exports[ 'Show render help.' ] = function (test) {
  let spawned = childProcess.spawn(bin, [ 'render', '-h' ])
  //spawned.stdout.pipe(process.stdout)
  //spawned.stderr.pipe(process.stderr)
  spawned.on('exit', function () {
    test.done()
  })
}

exports[ 'Render by custom configuration.' ] = function (test) {
  let bud = __dirname + '/../../doc/mockups/mock-bud.bud',
    configuration = __dirname + '/../../doc/mockups/mock-coz-configuration.js';
  let spawned = childProcess.spawn(bin, [ 'render', '-c', configuration, bud ])
  spawned.stdout.pipe(process.stdout)
  spawned.stderr.pipe(process.stderr)
  spawned.on('exit', function () {
    test.done()
  })
}