#!/usr/bin/env

/**
 * run_rendering.js
 * This is a bud file for "04-from-programmatic-api/run_rendering.js"
 */

var coz = require('coz');

// Render .bud files.
coz.render([
    '**/.*.bud'
], function (err) {
    console.log(err ? err : 'Done!');
});