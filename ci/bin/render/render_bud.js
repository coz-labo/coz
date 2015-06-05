#!/usr/bin/env node

/**
 * Render bud files.
 */

"use strict";

var path = require('path');
var leaf = require('../../../lib');

var basedir = path.resolve(__dirname, '../../..');
process.chdir(basedir);

leaf.render([
    'docs/**/.*.bud',
    'lib/**/.*.bud'
], {
    verbose: true
}, function (e) {
    if (e) {
        console.error(e);
    }
});
