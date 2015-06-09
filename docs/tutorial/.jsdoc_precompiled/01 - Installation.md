coz runs on [Node.js][nodejs_url] and is available as an [NPM][npm_url] package.

### Installing Node.js

Download from [Node.js official page][nodejs_download_url], or use [nvm][nvm_url] to manage multiple version.

coz works on node version 0.10.3 or later.

___


### Installing coz

Install coz from [NPM][npm_url] with npm command.

```bash
{@lang bash}# Install coz commandline interface.
$ npm install coz -g
```

With `-g` option, npm installs the module globally and you can run coz simply by `coz` from anywhere.
(It may need to be run via `sudo`)

Show the coz version to check install is successfully.
The latest version `1.0.7` will be shown unless you specified older.

```bash
{@lang bash}# Show coz version.
$ coz --version
```

If you do not want do it globally, install it local and use [programmatic API][tutorial_programmatic_url].


___


### Tutorials

<!-- Tutorials start -->

+ [01 - Installation][tutorial_01_installation_url]
+ [02 - Render bud files][tutorial_02_render_bud_files_url]

<!-- Tutorials end -->

### Links

+ [Node.js][nodejs_url]
+ [NPM][npm_url]
+ [nvm][nvm_url]
+ [coz @ npm][my_npm_url]

<!-- URLs start -->

[nodejs_url]: http://nodejs.org/
[nodejs_download_url]: https://nodejs.org/download/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[my_npm_url]: http://www.npmjs.org/package/coz
[tutorial_01_installation_url]: tutorial-01%20-%20Installation.html
[tutorial_02_render_bud_files_url]: tutorial-02%20-%20Render%20bud%20files.html

<!-- URLs end -->