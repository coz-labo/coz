#!/usr/bin/env node

/**
 * Render bud files.
 */

"use strict";

var path = require('path');
var planter = require('../../../lib');

var basedir = path.resolve(__dirname, '../../..');
process.chdir(basedir);

planter.blossom([
    'docs/**/.*.bud',
    'lib/**/.*.bud'
], {
    verbose: true
}, function (e) {
    if (e) {
        console.error(e);
    }
});
