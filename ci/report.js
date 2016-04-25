#!/usr/bin/env node

/**
 * Run report
 */

'use strict'

const path = require('path')
const apeTasking = require('ape-tasking')
const apeReporting = require('ape-reporting')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks([
  (callback) => {
    let lcov = path.resolve('coverage/lcov.info')
    apeReporting.sendToCodeclimate(lcov, callback)
  }
], true)
