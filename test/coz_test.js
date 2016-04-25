/**
 * Test case for module:coz
 * Runs with nodeunit.
 */
'use strict'

const Coz = require('../lib/coz.js')
const mkdirp = require('mkdirp')
const co = require('co')
const fs = require('fs')
const injectmock = require('injectmock')
const assert = require('assert')

before((done) => {
  injectmock(console, 'log', injectmock.noop)
  mkdirp.sync(`${__dirname}/../tmp`)
  done()
})

after((done) => {
  injectmock.restoreAll()
  done()
})

it('Create coz.', (done) => {
  let coz = new Coz()
  assert.ok(coz)
  done()
})

it('Do render.', () => co(function * () {
  let coz = new Coz()
  let src = `${__dirname}/../doc/mockups/mock-bud.bud`
  yield coz.render([
    src
  ], { verbose: true })
}))

it('Do render without options.', () => co(function * () {
  let coz = new Coz()
  let src = `${__dirname}/../doc/mockups/mock-bud.bud`
  yield coz.render([
    src
  ])
}))

it('Do clean.', () => co(function * () {
  let coz = new Coz()
  let filename = `${__dirname}/../tmp/some_file.txt.bud`
  require('fs').writeFileSync(filename, 'module.exports = {path:__filename}')
  yield coz.clean(filename)
}))

it('With custom setup.', () => co(function * () {
  let coz = new Coz()
  let filename = `${__dirname}/../tmp/some_coz_file0008.txt`
  yield coz.render({
    path: filename,
    force: true,
    mkdirp: true,
    tmpl: '{{myCustomHelper baz}}',
    setup: {
      helpers: {
        myCustomHelper (txt) {
          return 'my-custom-' + txt
        }
      }
    },
    data: {
      baz: 'quz'
    }
  })
  let content = fs.readFileSync(filename).toString()
  assert.equal('my-custom-quz', content.trim())
}))

it('Do render with configuration.', () => co(function * () {
  let configuration = require.resolve('../doc/mockups/mock-coz-configuration')
  let coz = new Coz(configuration)
  let filename = `${__dirname}/../tmp/some_file2.txt`
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename)
  }
  assert.ok(coz)
  yield coz.render({
    path: filename,
    force: true,
    engine: 'myCustomEngine',
    tmpl: 'foobarbaz'
  })
  fs.readFile(filename, function (err, content) {
    assert.ifError(err)
    assert.equal(String(content).trim(), 'renderByMyCustom')
  })
}))

/* global describe, before, after, it */
