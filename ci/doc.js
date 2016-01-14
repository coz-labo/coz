#!/usr/bin/env node

/**
 * Generate doc.
 */

"use strict";

const apeTasking = require('ape-tasking'),
    async = require('async'),
    path = require('path'),
    coz = require('../lib'),
    filecopy = require('filecopy'),
    apiguide = require('apiguide'),
    mkdirp = require('mkdirp'),
    cozExamples = require('coz-examples');

let basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('doc', [
    function generateExamples(callback) {
        let examplesDir = path.join(require.resolve('coz-examples/package.json'), '..');
        async.eachSeries(['.*.*', '*.*'], (pattern, callback) => {
            async.eachSeries(Object.keys(cozExamples), (dirname, callback) => {
                let src = path.join(examplesDir, dirname, pattern),
                    destDir = path.join('example', dirname);

                mkdirp.sync(destDir);
                filecopy(src, destDir, {
                    mkdirp: true
                }, callback);
            }, callback);
        }, callback);
    },
    function generateApiGuide(callback) {
        apiguide([
            'lib/**/*.js',
            'README.md'
        ], {
            destination: "doc/apiguide",
            verbose: true,
            tutorials: "doc/tutorial/.jsdoc_precompiled",
            templates: {
                color: '#418300',
                systemName: 'coz',
                favicon: 'doc/favicon.png',
                copyright: "okunishitaka.com Copyright © 2015"
            }
        }, callback);
    },
    function (callback) {
        coz.render('doc/readme/.*.bud', callback);
    }
], true);