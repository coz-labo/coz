/**
 * Test case for module:coz
 * Runs with nodeunit.
 */

"use strict";

var Coz = require('../../lib/coz.js'),
    fs = require('fs');

var log;
exports.setUp = function (done) {
    log = console.log;
    //console.log = function () {
    //};
    done();
};

exports.tearDown = function (done) {
    console.log = log;
    done();
};

exports['Create coz.'] = function (test) {
    var coz = new Coz();
    test.ok(coz);
    test.done();
};

exports['Do render.'] = function (test) {
    var coz = new Coz();
    var src = __dirname + '/../mocks/mock-bud.bud';
    coz.render([
        src
    ], {verbose: true}, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Do render without options.'] = function (test) {
    var coz = new Coz();
    var src = __dirname + '/../mocks/mock-bud.bud';
    coz.render([
        src
    ], function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Do clean.'] = function (test) {
    var coz = new Coz();
    var filename = __dirname + '/../.work/some_file.txt.bud';
    require('fs').writeFileSync(filename, 'module.exports = {path:__filename}');
    coz.clean(filename, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Handle error.'] = function (test) {
    var coz = new Coz();
    var error = console.error;
    console.error = function () {
    };
    coz._handleError('foo');
    console.error = error;
    test.done();
};

exports['Do render with configuration.'] = function (test) {
    var configuration = require.resolve('../mocks/mock-coz-configuration');
    var coz = new Coz(configuration);
    var filename = __dirname + '/../.work/some_file2.txt';
    if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
    }
    test.ok(coz);
    coz.render({
        path: filename,
        force: true,
        engine: 'myCustomEngine',
        tmpl: 'foobarbaz'
    }, function (err) {
        test.ifError(err);
        fs.readFile(filename, function (err, content) {
            test.ifError(err);
            test.equal(String(content).trim(), 'renderByMyCustom');
            test.done();
        });
    });
};