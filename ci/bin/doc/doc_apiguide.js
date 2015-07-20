#!/usr/bin/env node

var apiguide = require('apiguide'),
    path = require('path');

var basedir = path.resolve(__dirname, '../../..');
process.chdir(basedir);

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
        favicon: 'docs/favicon.png'
    }
}, function (err) {
    if (err) {
        console.error(err);
    }
});