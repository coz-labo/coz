#!/usr/bin/env node

/**
 * Run test
 */

'use strict'

const apeTasking = require('ape-tasking')
const apeTesting = require('ape-testing')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('test', [
  () => apeTesting.runMocha('test/*_test.js', {})
], true)
