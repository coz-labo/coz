#!/usr/bin/env node

/**
 * Run coverage.
 */

'use strict'

const expandglob = require('expandglob')
const apeTasking = require('ape-tasking')
const apeCovering = require('ape-covering')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('cover', [
  (callback) => {
    apeCovering.measureCoverage(
      'nodeunit', expandglob.sync('test/*_test.js'), {
        dir: 'coverage'
      }, callback
    )
  }
], true)