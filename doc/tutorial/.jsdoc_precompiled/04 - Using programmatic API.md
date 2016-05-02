### Overview

coz provides programmatic API.

This is usefull when you do not want to install coz globally.

### Install coz Locally

```bash
{@lang bash}$ npm install coz --save-dev
```


### Base Usage.

This is an example to execute rendering via programmatic API.

```javascript
{@lang javascript}#!/usr/bin/env node

/**
 * run_rendering.js
 * This is an executable file for "examples/04-from-programmatic-api/run_rendering.js"
 */

var coz = require('coz');

// Render .bud files.
coz.render([
    '**/.*.bud'
], function (err) {
    console.log(err ? err : 'Done!');
});
```


### Execute bud File Itself.

You can mark .bud as an executable file and trigger rendering itself.


```javascript
{@lang javascript}#!/usr/bin/env node

/**
 * .exec-me.txt.bud
 * This is a bud file for "examples/04-exec-bud-itself"
 */

module.exports = {
    force: true,
    mode: '444',
    tmpl: 'This file is rendered from: "{{from}}"',
    data: {
        from: require('path').basename(__filename)
    }
};

// If there is no parent, it means that this module is executed directory.
// e.g., `node .exec-me.txt.bud`
var main = module.parent == null;
if (main) {
    // Render this bud file.
    // `__filename` is Node.js reserved word and contains path of this file.
    require('coz').render(__filename);
}
```

___

### See Also

<!-- See also start -->

+ [05 - Customizing coz][tutorial_05_customizing_coz_url]

<!-- See also end -->

### Tutorials

<!-- Tutorials start -->

+ [01 - Installing coz][tutorial_01_installing_coz_url]
+ [02 - Rendering bud files][tutorial_02_rendering_bud_files_url]
+ [03 - Mastering coz bud][tutorial_03_mastering_coz_bud_url]
+ [04 - Using programmatic API][tutorial_04_using_programmatic_a_p_i_url]
+ [05 - Customizing coz][tutorial_05_customizing_coz_url]

<!-- Tutorials end -->

### Links

+ [API Guide of coz][my_apiguide_url]
+ [coz @ npm][my_npm_url]

<!-- URLs start -->

[nodejs_url]: http://nodejs.org/
[nodejs_download_url]: https://nodejs.org/download/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[my_npm_url]: http://www.npmjs.org/package/coz
[my_apiguide_url]: http://okunishinishi.github.io/coz/apiguide/
[tutorial_01_installing_coz_url]: tutorial-01%20-%20Installing%20coz.html
[tutorial_02_rendering_bud_files_url]: tutorial-02%20-%20Rendering%20bud%20files.html
[tutorial_03_mastering_coz_bud_url]: tutorial-03%20-%20Mastering%20coz%20bud.html
[tutorial_04_using_programmatic_a_p_i_url]: tutorial-04%20-%20Using%20programmatic%20API.html
[tutorial_05_customizing_coz_url]: tutorial-05%20-%20Customizing%20coz.html

<!-- URLs end -->