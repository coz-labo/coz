#!/usr/bin/env node

/**
 * Deploy files.
 */

'use strict'

const apeTasking = require('ape-tasking')
const apeDeploying = require('ape-deploying')
const rimraf = require('rimraf')
const path = require('path')

process.chdir(`${__dirname}/..`)

apeTasking.runTasks('deploy', [
  (callback) => {
    apeDeploying.deployGhPages('doc', {}, callback)
  },
  (callback) => {
    let url = 'git@github.com:coz-repo/coz.wiki.git'
    apeDeploying.deployGhWiki('doc/wiki', url, {
      clean: true
    }, (err)=> {
      if (err) {
        console.error(err)
      }
      callback(null) // Continue tasks.
    })
  },
  (callback) => {
    let tmpDir = `${__dirname}/../tmp`
    rimraf(tmpDir, callback)
  }
], true)

