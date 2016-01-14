#!/usr/bin/env node

/**
 * Release this package.
 */

"use strict";

const path = require('path'),
    apeTasking = require('ape-tasking'),
    apeReleasing = require('ape-releasing');

const basedir = path.resolve(__dirname, '..');
process.chdir(basedir);


apeTasking.runTasks('release', [
    (callback) => {
        apeReleasing.releasePackage({
            beforeRelease: [
                './ci/build.js',
                './ci/test.js',
                './ci/doc.js',
                './ci/deploy.js'
            ]
        }, callback);
    }
], true);
