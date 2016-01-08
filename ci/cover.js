#!/usr/bin/env node

/**
 * Run coverage.
 */

"use strict";

const path = require('path'),
    expandglob = require('expandglob'),
    apeTasking = require('ape-tasking'),
    apeCovering = require('ape-covering');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('cover', [
    function (callback) {
        apeCovering.measureCoverage(
            'nodeunit', expandglob.sync('test/*_test.js'), {
                dir: 'coverage'
            }, callback
        );
    }
], true);