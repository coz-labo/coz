#!/usr/bin/env node

/**
 * Deploy files.
 */

"use strict";

var apeTasking = require('ape-tasking'),
    apeDeploying = require('ape-deploying'),
    rimraf = require('rimraf'),
    path = require('path');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('deploy', [
    function deployGhPages(callback) {
        apeDeploying.deployGhPages('doc', {}, callback);
    },
    function deployWiki(callback) {
        var url = 'https://github.com/okunishinishi/node-coz.wiki.git';
        apeDeploying.deployGhWiki('doc/wiki/*.md', url, {
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

