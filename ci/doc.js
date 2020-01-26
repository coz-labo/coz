#!/usr/bin/env node

/**
 * Generate doc.
 */

'use strict'

const apeTasking = require('ape-tasking')
const path = require('path')
const coz = require('../shim/node')
const filecopy = require('filecopy')
const mkdirp = require('mkdirp')
const cozExamples = require('coz-examples')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('doc', [
  async () => {
    let examplesDir = path.join(require.resolve('coz-examples/package.json'), '..')
    for (let pattern of ['.*.*', '*.*']) {
      for (let dirname of Object.keys(cozExamples)) {
        let src = path.join(examplesDir, dirname, pattern)
        let destDir = path.join('example', dirname)
        mkdirp.sync(destDir)
        await filecopy(src, destDir, {
          mkdirp: true
        })
      }
    }
  },
  () => coz.render('doc/guides/.*.bud')
], true)
