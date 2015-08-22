#!/usr/bin/env node

/**
 * Generate docs.
 */

"use strict";

var apeTasking = require('ape-tasking'),
    async = require('async'),
    path = require('path'),
    coz = require('../lib'),
    filecopy = require('filecopy'),
    apiguide = require('apiguide'),
    mkdirp = require('mkdirp'),
    cozExamples = require('coz-examples');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('doc', [
    function generateExamples(callback) {
        var examplesDir = path.join(require.resolve('coz-examples/package.json'), '..');
        async.eachSeries(['.*.*', '*.*'], function (pattern, callback) {
            async.eachSeries(Object.keys(cozExamples), function (dirname, callback) {
                var src = path.join(examplesDir, dirname, pattern),
                    destDir = path.join('docs/examples', dirname);

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
            destination: "docs/apiguide",
            verbose: true,
            tutorials: "docs/tutorial/.jsdoc_precompiled",
            templates: {
                color: '#418300',
                systemName: 'coz',
                favicon: 'docs/favicon.png',
                copyright: "okunishitaka.com Copyright © 2015"
            }
        }, callback);
    },
    function (callback) {
        coz.render('docs/readme/.*.bud', callback);
    }
], true);