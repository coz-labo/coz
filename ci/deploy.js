#!/usr/bin/env node

/**
 * Deploy files.
 */

"use strict";

var apeTasking = require('ape-tasking'),
    path = require('path'),
    execcli = require('execcli');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('deploy', [
    function deployGhPages(callback) {
        execcli('git', ['subtree',
            'push',
            '--prefix=docs',
            'origin',
            'gh-pages'
        ], callback);
    },
    function deployWiki(callback) {
        execcli('docs/wiki/deploy_wiki.sh', callback);
    }
], true);

