#!/usr/bin/env node

/**
 * Run report
 */

"use strict";

const path = require('path'),
    apeTasking = require('ape-tasking'),
    apeReporting = require('ape-reporting');

let basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks([
    (callback) => {
        var lcov = path.resolve(basedir, 'coverage/lcov.info');
        apeReporting.sendToCodeclimate(lcov, callback);
    }
], true);
