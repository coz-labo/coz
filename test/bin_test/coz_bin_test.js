/**
 * Test case for bin/leaf
 * Runs with nodeunit.
 */

'use strict'

const bin = require.resolve('../../bin/coz')
const childProcess = require('child_process')
const assert = require('assert')

describe(() => {
  it('Show help.', (done) => {
    let spawned = childProcess.spawn(bin, [ '-h' ])
    // spawned.stdout.pipe(process.stdout)
    // spawned.stderr.pipe(process.stderr)
    spawned.on('exit', function () {
      done()
    })
  })

  it('Show render help.', (done) => {
    let spawned = childProcess.spawn(bin, [ 'render', '-h' ])
    // spawned.stdout.pipe(process.stdout)
    // spawned.stderr.pipe(process.stderr)
    spawned.on('exit', function () {
      done()
    })
  })

  it('Render by custom configuration.', (done) => {
    let bud = `${__dirname}/../../doc/mockups/mock-bud.bud`
    let configuration = `${__dirname}/../../doc/mockups/mock-coz-configuration.js`
    let spawned = childProcess.spawn(bin, [ 'render', '-c', configuration, bud ])
    spawned.stdout.pipe(process.stdout)
    spawned.stderr.pipe(process.stderr)
    spawned.on('exit', function () {
      done()
    })
  })
})

/* global describe, it */
