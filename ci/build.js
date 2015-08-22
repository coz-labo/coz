#!/usr/bin/env node

var path = require('path'),
    apeTasking = require('ape-tasking'),
    coz = require('../lib');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('build', [
    function (callback) {
        coz.render([
            '.*.bud',
            'docs/**/.*.bud',
            'lib/**/.*.bud',
            'test/**/.*.bud'
        ], callback);
    }
], true);

