/**
 * Test case for budRemover.
 * Runs with nodeunit.
 */

var BudRemover = require('../../lib/bud/bud_remover.js'),
    mkdirp = require('mkdirp');


exports.setUp = function (done) {
    mkdirp.sync(__dirname + '/../../tmp');
    done();
};


exports['Bud remover'] = function (test) {
    var fs = require('fs'),
        filename = __dirname + '/../../tmp/work-file.txt';
    fs.writeFile(filename, 'foo', function (err) {
        test.ifError(err);
        new BudRemover().remove({
            path: filename
        }, function (err) {
            test.ifError(err);
            test.done();
        });
    });
};

