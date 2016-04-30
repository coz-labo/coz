#!/usr/bin/env node

/**
 * Run coverage.
 */

'use strict'

const apeTasking = require('ape-tasking')
const apeCovering = require('ape-covering')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('cover', [
  () => apeCovering.measureCoverage('_mocha', [
    'test/*_test.js'
  ], {
    dir: 'coverage'
  })
], true)