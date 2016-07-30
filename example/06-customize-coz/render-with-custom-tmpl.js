#!/usr/bin/env node

/**
 * render-with-custom-tmpl.js
 * This is an executable file for "examples/06-customize-coz"
 */
'use strict'

const { Coz } = require('coz')

// Create a custom coz context.
let coz = new Coz({
  // Define custom templates.
  tmpls: {
    // Custom template to generate single line json string.
    singleLineJson (data) {
      return JSON.stringify(data, null, 0)
    }
  }
})

coz.render({
  force: true,
  mode: '444',
  path: 'render-by-my-custom-tmpl-01.json',
  // Use custom tmpl
  tmpl: 'singleLineJson',
  // Data to pass custom tmpl.
  data: {
    'generator': __filename,
    'coz is': 'wonderful'
  }
}).then(() => {
  console.log('Compile done with custom tmpl.')
})
