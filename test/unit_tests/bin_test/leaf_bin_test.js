/**
 * Test case for bin/leaf
 * Runs with nodeunit.
 */

"use strict";

var leafBin = require.resolve('../../../bin/leaf'),
    childProcess = require('child_process');


exports['Show help.'] = function (test) {
    var spawned = childProcess.spawn(leafBin, ['-h']);
    //spawned.stdout.pipe(process.stdout);
    //spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function () {
        test.done();
    });
};


exports['Show render help.'] = function (test) {
    var spawned = childProcess.spawn(leafBin, ['render', '-h']);
    //spawned.stdout.pipe(process.stdout);
    //spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function () {
        test.done();
    });
};
