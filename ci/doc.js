#!/usr/bin/env node

/**
 * Generate doc.
 */

'use strict'

const apeTasking = require('ape-tasking')
const path = require('path')
const co = require('co')
const coz = require('../lib')
const filecopy = require('filecopy')
const apiguide = require('apiguide')
const mkdirp = require('mkdirp')
const cozExamples = require('coz-examples')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('doc', [
  () => co(function * () {
    let examplesDir = path.join(require.resolve('coz-examples/package.json'), '..')
    for (let pattern of [ '.*.*', '*.*' ]) {
      for (let dirname of Object.keys(cozExamples)) {
        let src = path.join(examplesDir, dirname, pattern)
        let destDir = path.join('example', dirname)
        mkdirp.sync(destDir)
        yield filecopy(src, destDir, {
          mkdirp: true
        })
      }
    }
  }),
  () => apiguide([
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
  }),
  () => coz.render('doc/guides/.*.bud')
], true)
