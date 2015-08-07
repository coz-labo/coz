#!/usr/bin/env node

/**
 * Run test
 */

"use strict";

var path = require('path'),
    apeTasking = require('ape-tasking'),
    apeTesting = require('ape-testing');

var basedir = path.resolve(__dirname, '..');

process.chdir(basedir);

apeTasking.runTasks('test', [
    function (callback) {
        apeTesting.runNodeunit('test/**/*_test.js', callback);
    }
], true);