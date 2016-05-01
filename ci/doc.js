#!/usr/bin/env node

/**
 * Generate doc.
 */

'use strict'

const apeTasking = require('ape-tasking')
const async = require('async')
const path = require('path')
const coz = require('../lib')
const filecopy = require('filecopy')
const apiguide = require('apiguide')
const mkdirp = require('mkdirp')
const cozExamples = require('coz-examples')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('doc', [
  function generateExamples (callback) {
    let examplesDir = path.join(require.resolve('coz-examples/package.json'), '..')
    async.eachSeries([ '.*.*', '*.*' ], (pattern, callback) => {
      async.eachSeries(Object.keys(cozExamples), (dirname, callback) => {
        let src = path.join(examplesDir, dirname, pattern)
        let destDir = path.join('example', dirname);

        mkdirp.sync(destDir)
        filecopy(src, destDir, {
          mkdirp: true
        }).then(() => callback(null))
      }, callback)
    }, callback)
  },
  function generateApiGuide (callback) {
    apiguide([
      'lib/**/*.js',
      'README.md'
    ], {
      destination: 'doc/apiguide',
      verbose: true,
      tutorials: 'doc/tutorial/.jsdoc_precompiled',
      templates: {
        color: '#418300',
        systemName: 'coz',
        favicon: 'doc/favicon.png',
        copyright: 'okunishitaka.com Copyright © 2015'
      }
    }, callback)
  },
  function (callback) {
    coz.render('doc/guides/.*.bud', callback)
  }
], true)