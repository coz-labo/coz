Getting started
------

### Requirements

+ [node.js][nodejs_url]


### Installation

{{pkg.name}} is available as an [NPM][npm_url] package.

```bash
# Install {{pkg.name}} as a global module.
$ npm install {{pkg.name}} -g
```

Or you can install it without `-g` option and use [Programmatic API](#programmatic-api).
For more details, see tutorial section "[01 - Installing coz](01%20-%20Installing%20coz)".


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

For more details, see tutorial section "[02 - Rendering bud files](02%20-%20Rendering%20bud%20files)".


<a name="programmatic-api" />
### Programmatic API

{{pkg.name}} provides programmatic API which enables you to execute {{pkg.name}} commands from Node.js program.

```javascript
{{{read './examples/05-exec-bud-itself/run_rendering.js'}}}
```

For more details, see tutorial section "[04 - Using programmatic API](04%20-%20Using%20programmatic%20API)".

