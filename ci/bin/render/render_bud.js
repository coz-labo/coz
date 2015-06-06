#!/usr/bin/env node

/**
 * Render bud files.
 */

"use strict";

var path = require('path');
var kyo = require('../../../lib');

var basedir = path.resolve(__dirname, '../../..');
process.chdir(basedir);

kyo.render([
    'docs/**/.*.bud',
    'lib/**/.*.bud'
], {
    verbose: true
}, function (e) {
    if (e) {
        console.error(e);
    }
});
