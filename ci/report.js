#!/usr/bin/env node

/**
 * Run report
 */

"use strict";

var path = require('path'),
    apeTasking = require('ape-tasking'),
    apeReporting = require('ape-reporting');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks([
    function (callback) {
        var lcov = path.resolve(basedir, 'coverage/lcov.info');
        apeReporting.sendToCodeclimate(lcov, callback);
    }
], true);
