#!/usr/bin/env node

/**
 * Deploy files.
 */

'use strict'

const apeTasking = require('ape-tasking')
const apeDeploying = require('ape-deploying')
const rimraf = require('rimraf')

process.chdir(`${__dirname}/..`)

let WIKI_URL = 'git@github.com:coz-labo/coz.wiki.git'

apeTasking.runTasks('deploy', [
  () => apeDeploying.deployGhPages('doc', {}),
  () => apeDeploying.deployGhWiki('doc/wiki', WIKI_URL, {
    clean: true
  }).catch((err) => {
    if (err) {
      console.error(err)
    }
    return null // Continue tasks.
  }),
  (callback) => {
    let tmpDir = `${__dirname}/../tmp`
    rimraf(tmpDir, callback)
  }
], true)
