### Overview

coz runs on [Node.js][nodejs_url] and is available as an [NPM][npm_url] package.

### Installing Node.js

If you don't have Node.js, download one from [Node.js official page][nodejs_download_url], or use [nvm][nvm_url] to manage multiple version.

coz works on node version 0.10.3 or later.

___


### Installing coz via NPM

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

If you do not want do it globally, install it local and use [programmatic API][tutorial_04_using_programmatic__a_p_i_url].


___


### Tutorials

<!-- Tutorials start -->

+ [01 - Installing coz][tutorial_01_installing_coz_url]
+ [02 - Rendering bud files][tutorial_02_rendering_bud_files_url]
+ [03 - Digging deeper into bud][tutorial_03_digging_deeper_into_bud_url]
+ [04 - Using programmatic API][tutorial_04_using_programmatic__a_p_i_url]
+ [05 - Customizing coz][tutorial_05_customizing_coz_url]

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
[tutorial_01_installing_coz_url]: tutorial-01%20-%20Installing%20coz.html
[tutorial_02_rendering_bud_files_url]: tutorial-02%20-%20Rendering%20bud%20files.html
[tutorial_03_digging_deeper_into_bud_url]: tutorial-03%20-%20Digging%20deeper%20into%20bud.html
[tutorial_04_using_programmatic__a_p_i_url]: tutorial-04%20-%20Using%20programmatic%20API.html
[tutorial_05_customizing_coz_url]: tutorial-05%20-%20Customizing%20coz.html

<!-- URLs end -->