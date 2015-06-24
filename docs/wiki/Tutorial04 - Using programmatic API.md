### Overview

coz provides programmatic API.

This is usefull when you do not want to install coz globally.

### Install coz locally

```bash
$ npm install coz --save-dev
```


### Base usage.

This is an example to execute rendering via programmatic API.

```javascript
#!/usr/bin/env

/**
 * run_rendering.js
 * This is a bud file for "examples/04-from-programmatic-api/run_rendering.js"
 */

var coz = require('coz');

// Render .bud files.
coz.render([
    '**/.*.bud'
], function (err) {
    console.log(err ? err : 'Done!');
});
```

###

***
```javascript
#!/usr/bin/env

/**
 * .exec-me.txt.bud
 * This is a bud file for "examples/04-exec-bud-itself"
 */

module.exports = {
    force: true,
    mode: '444',
    tmpl: 'This file is rendered from: ""',
    data: {
        from: __filename
    }
};

// If there is no parent, it means that this module is executed directory.
// e.g., `node .exec-me.txt.bud`
var main = module.parent == null;
if (!main) {
    // Render this bud file.
    // `__filename` is Node.js reserved word and contains path of this file.
    require('coz').render(__filename);
}
```

___

### See also

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
[tutorial_01_installing_coz_url]: 01%20-%20Installing%20coz.md
[tutorial_02_rendering_bud_files_url]: 02%20-%20Rendering%20bud%20files.md
[tutorial_03_mastering_coz_bud_url]: 03%20-%20Mastering%20coz%20bud.md
[tutorial_04_using_programmatic_a_p_i_url]: 04%20-%20Using%20programmatic%20API.md
[tutorial_05_customizing_coz_url]: 05%20-%20Customizing%20coz.md

<!-- URLs end -->