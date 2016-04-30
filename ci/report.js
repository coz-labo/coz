#!/usr/bin/env node

/**
 * Run report
 */

'use strict'

const apeTasking = require('ape-tasking')
const apeReporting = require('ape-reporting')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks([
  () => apeReporting.sendToCodeclimate('coverage/lcov.info')
], true)
