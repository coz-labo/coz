#!/usr/bin/env node

/**
 * Deploy files.
 */

"use strict";

const apeTasking = require('ape-tasking'),
    apeDeploying = require('ape-deploying'),
    rimraf = require('rimraf'),
    path = require('path');

let basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('deploy', [
    (callback) => {
        apeDeploying.deployGhPages('doc', {}, callback);
    },
    (callback) => {
        let url = 'git@github.com:coz-repo/coz.wiki.git';
        apeDeploying.deployGhWiki('doc/wiki', url, {
            clean: true
        }, function (err) {
            if (err) {
                console.error(err);
            }
            callback(null); //Continue tasks.
        });
    },
    (callback) => {
        let tmpDir = path.resolve(basedir, 'tmp');
        rimraf(tmpDir, callback);
    }
], true);

