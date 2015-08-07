#!/usr/bin/env node

var path = require('path'),
    apeTasking = require('ape-tasking'),
    execcli = require('execcli'),
    coz = require('../lib');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('build', [
    function (callback) {
        execcli('./docs/examples/render_examples.sh', callback);
    },
    function (callback) {
        coz.render([
            '.*.bud',
            'docs/**/.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    }
], true);

