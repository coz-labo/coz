#!/usr/bin/env node

'use strict'

const apeTasking = require('ape-tasking')
const coz = require('../lib')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('build', [
  () => coz.render([
    '.*.bud',
    'doc/**/.*.bud',
    'example/**/.*.bud',
    'lib/**/.*.bud',
    'test/**/.*.bud'
  ])
], true)

