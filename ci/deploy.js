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
    function deployGhPages(callback) {
        apeDeploying.deployGhPages('doc', {}, callback);
    },
    function deployWiki(callback) {
        var url = 'git@github.com:coz-repo/coz.wiki.git';
        apeDeploying.deployGhWiki('doc/wiki', url, {
            clean: true
        }, function (err) {
            if (err) {
                console.error(err);
            }
            callback(null); //Continue tasks.
        });
    },
    function cleanup(callback) {
        var tmpDir = path.resolve(basedir, 'tmp');
        rimraf(tmpDir, callback);
    }
], true);

