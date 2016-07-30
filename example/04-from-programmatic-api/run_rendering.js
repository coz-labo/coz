#!/usr/bin/env node

/**
 * run_rendering.js
 * This is an executable file for "examples/04-from-programmatic-api/run_rendering.js"
 */
'use strict'

const coz = require('coz')

// Render .bud files.
coz.render([
  '**/.*.bud'
]).then(() => {
  console.log('Done!')
})
