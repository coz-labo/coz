#!/usr/bin/env node

/**
 * Render bud files.
 */

"use strict";

var path = require('path');
var coz = require('../../../lib');

var basedir = path.resolve(__dirname, '../../..');
process.chdir(basedir);

coz.render([
    'docs/**/.*.bud',
    'lib/**/.*.bud',
    'test/**/.*.bud'
], {
    verbose: true
}, function (e) {
    if (e) {
        console.error(e);
    }
});
