#!/usr/bin/env node

/**
 * Release this package.
 */

"use strict";

var path = require('path'),
    apeTasking = require('ape-tasking'),
    apeReleasing = require('ape-releasing');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);


apeTasking.runTasks('release', [
    function (callback) {
        apeReleasing.execCommand('./ci/build.js', callback);
    },
    function (callback) {
        apeReleasing.execCommand('./ci/test.js', callback);
    },
    function (callback) {
        apeReleasing.execCommand('ci/bin/doc.sh', callback);
    },
    function (callback) {
        apeReleasing.execCommand('ci/bin/deploy.sh', callback);
    },
    function (callback) {
        apeReleasing.releasePackage({}, callback);
    }
], true);