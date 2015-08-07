#!/usr/bin/env node

/**
 * Generate docs.
 */

"use strict";


var apeTasking = require('ape-tasking'),
    path = require('path'),
    coz = require('../lib'),
    apiguide = require('apiguide'),
    execcli = require('execcli');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('doc', [
    function (callback) {
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