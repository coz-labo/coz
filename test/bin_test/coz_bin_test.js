/**
 * Test case for bin/leaf
 * Runs with nodeunit.
 */

"use strict";

var bin = require.resolve('../../bin/coz'),
    childProcess = require('child_process');


exports['Show help.'] = function (test) {
    var spawned = childProcess.spawn(bin, ['-h']);
    //spawned.stdout.pipe(process.stdout);
    //spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function () {
        test.done();
    });
};


exports['Show render help.'] = function (test) {
    var spawned = childProcess.spawn(bin, ['render', '-h']);
    //spawned.stdout.pipe(process.stdout);
    //spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function () {
        test.done();
    });
};


exports['Render by custom configuration.'] = function (test) {
    var bud = __dirname + '/../../docs/mockups/mock-bud.bud',
        configuration = __dirname + '/../../docs/mockups/mock-coz-configuration.js';
    var spawned = childProcess.spawn(bin, ['render', '-c', configuration, bud]);
    spawned.stdout.pipe(process.stdout);
    spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function () {
        test.done();
    });
};