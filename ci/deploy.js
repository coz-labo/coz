#!/usr/bin/env node

/**
 * Deploy files.
 */

"use strict";

var apeTasking = require('ape-tasking'),
    apeDeploying = require('ape-deploying'),
    path = require('path'),
    execcli = require('execcli');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('deploy', [
    function deployGhPages(callback) {
        apeDeploying.deployGhPages('docs', {}, callback);
    },
    function deployWiki(callback) {
        var url = 'https://github.com/okunishinishi/node-coz.wiki.git';
        apeDeploying.deployGhWiki('docs/wiki/*.md', url, {
            clean: true
        }, function (err) {
            if (err) {
                console.error(err);
            }
            callback(null); //Continue tasks.
        });
    }
], true);

