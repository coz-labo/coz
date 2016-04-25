/**
 * Test case for module:coz
 * Runs with nodeunit.
 */
'use strict'

let Coz = require('../lib/coz.js')
let mkdirp = require('mkdirp');
let fs = require('fs');
let injectmock = require('injectmock');

exports.setUp = function (done) {
  injectmock(console, 'log', injectmock.noop)
  mkdirp.sync(__dirname + '/../tmp')
  done()
}

exports.tearDown = function (done) {
  injectmock.restoreAll()
  done()
}

exports[ 'Create coz.' ] = function (test) {
  let coz = new Coz()
  test.ok(coz)
  test.done()
}

exports[ 'Do render.' ] = function (test) {
  let coz = new Coz()
  let src = __dirname + '/../doc/mockups/mock-bud.bud';
  coz.render([
    src
  ], { verbose: true }, function (err) {
    test.ifError(err)
    test.done()
  })
}

exports[ 'Do render without options.' ] = function (test) {
  let coz = new Coz()
  let src = __dirname + '/../doc/mockups/mock-bud.bud';
  coz.render([
    src
  ], function (err) {
    test.ifError(err)
    test.done()
  })
}

exports[ 'Do clean.' ] = function (test) {
  let coz = new Coz()
  let filename = __dirname + '/../tmp/some_file.txt.bud';
  require('fs').writeFileSync(filename, 'module.exports = {path:__filename}')
  coz.clean(filename, function (err) {
    test.ifError(err)
    test.done()
  })
}

exports[ 'Handle error.' ] = function (test) {
  let coz = new Coz()
  let error = console.error;
  console.error = function () {
  }
  coz._handleError('foo')
  console.error = error;
  test.done()
}

exports[ 'With custom setup.' ] = function (test) {
  let coz = new Coz()
  let filename = __dirname + '/../tmp/some_coz_file0008.txt';
  coz.render({
    path: filename,
    force: true,
    mkdirp: true,
    tmpl: '{{myCustomHelper baz}}',
    setup: {
      helpers: {
        myCustomHelper: function (txt) {
          return 'my-custom-' + txt;
        }
      }
    },
    data: {
      baz: 'quz'
    }
  }, function (err) {
    test.ifError(err)
    let content = fs.readFileSync(filename).toString()
    test.equal('my-custom-quz', content.trim())
    test.done()
  })
}

exports[ 'Do render with configuration.' ] = function (test) {
  let configuration = require.resolve('../doc/mockups/mock-coz-configuration')
  let coz = new Coz(configuration)
  let filename = __dirname + '/../tmp/some_file2.txt';
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename)
  }
  test.ok(coz)
  coz.render({
    path: filename,
    force: true,
    engine: 'myCustomEngine',
    tmpl: 'foobarbaz'
  }, function (err) {
    test.ifError(err)
    fs.readFile(filename, function (err, content) {
      test.ifError(err)
      test.equal(String(content).trim(), 'renderByMyCustom')
      test.done()
    })
  })
}