/**
 * Test case for bin/planter
 * Runs with nodeunit.
 */

"use strict";

var planterBin = require.resolve('../../../bin/planter'),
    childProcess = require('child_process');


exports['Show help.'] = function (test) {
    var spawned = childProcess.spawn(planterBin, ['-h']);
    //spawned.stdout.pipe(process.stdout);
    //spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function () {
        test.done();
    });
};


exports['Show blossom help.'] = function (test) {
    var spawned = childProcess.spawn(planterBin, ['blossom', '-h']);
    //spawned.stdout.pipe(process.stdout);
    //spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function () {
        test.done();
    });
};
