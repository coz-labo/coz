#!/usr/bin/env node

/**
 * Release this package.
 */

'use strict'

const apeTasking = require('ape-tasking')
const apeReleasing = require('ape-releasing')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('release', [
  () => apeReleasing.releasePackage({
    beforeRelease: [
      './ci/build.js',
      './ci/test.js',
      './ci/doc.js',
      './ci/deploy.js'
    ]
  })
], true)
