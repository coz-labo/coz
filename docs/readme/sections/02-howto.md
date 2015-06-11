Getting started
------

### Requirements

+ [node.js][nodejs_url]


### Installation

{{pkg.name}} is available as an [NPM][npm_url] package.

```bash
$ npm install {{pkg.name}} -g
```

### Quickstart

**.who-likes-what.txt.bud** (bud file)
```javascript
{{{read './examples/01-minimum-demo/.who-likes-what.txt.bud'}}}
```

As you see, `.bud` file is actuary a JavaScript file and could be exported a Node.js module.

Save this file as `.who-likes-what.txt.bud` and then, run:

```bash
# Render the bud file
$ coz render ".who-likes-what.txt.bud"
```

This will generate a file named `who-likes-what.txt`.


### Programmatic API

{{pkg.name}} provides programmatic API which enables you to execute {{pkg.name}} commands from Node.js program.

```javascript
{{{read './examples/05-exec-bud-itself/run_rendering.js'}}}
```

