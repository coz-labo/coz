#!/usr/bin/env node

/**
 * Run test
 */

"use strict";

const path = require('path'),
    apeTasking = require('ape-tasking'),
    apeTesting = require('ape-testing');

let basedir = path.resolve(__dirname, '..');

process.chdir(basedir);

apeTasking.runTasks('test', [
    (callback) => {
        apeTesting.runNodeunit('test/**/*_test.js', callback);
    }
], true);