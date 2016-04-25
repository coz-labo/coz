#!/usr/bin/env node

'use strict'

const apeTasking = require('ape-tasking')
const coz = require('../lib')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('build', [
  (callback) => {
    coz.render([
      '.*.bud',
      'doc/**/.*.bud',
      'example/**/.*.bud',
      'lib/**/.*.bud',
      'test/**/.*.bud'
    ], callback)
  }
], true)

