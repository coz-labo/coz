#!/usr/bin/env node
"use strict";

const path = require('path'),
    apeTasking = require('ape-tasking'),
    coz = require('../lib');

let basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('build', [
    (callback) => {
        coz.render([
            '.*.bud',
            'doc/**/.*.bud',
            'example/**/.*.bud',
            'lib/**/.*.bud',
            'test/**/.*.bud'
        ], callback);
    }
], true);

