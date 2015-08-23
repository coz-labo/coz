<a name="custom-setup-template"></a>
### Custom setup with template engine.

You can pass parameters to template engine via `setup` property in bud file.
For example, handlebars engine accepts helper functions which can be called in template context.


**.render-with-custom-setup.txt.bud** (bud file)
```javascript
{@lang javascript}/**
 * render-with-custom-setup.txt.bud
 * This is a bud file for "examples/06-customize-coz"
 */

// Bud with custom setup
module.exports = {
    force: true,
    mode: '444',
    // Template with using custom helper function.
    tmpl: 'Hey, {{emphasize msg}}',
    engine: 'handlebars',
    // Setup options for handlebars engine.
    setup: {
        // Register custom handlebars helpers.
        helpers: {
            'emphasize': function (txt) {
                return txt.toUpperCase() + '!!!!';
            }
        }
    },
    data: {
        'msg': 'watch out'
    }
};
if (!module.parent) {
    require('coz').render(__filename);
}
```

Running this will generate:

**render-with-custom-setup.txt** (generated file)
```
Hey, WATCH OUT!!!!
```


<a name="register-custom-template"></a>
### Register Custom Template Function.

You can register custom template to coz context and call it from .bud file by name.

**render-with-custom-tmpl.js** (executable file)
```javascript
{@lang javascript}#!/usr/bin/env node

/**
 * render-with-custom-tmpl.js
 * This is an executable file for "examples/06-customize-coz"
 */


var Coz = require('coz').Coz;

// Create a custom coz context.
var coz = new Coz({
    // Define custom templates.
    tmpls: {
        // Custom template to generate single line json string.
        singleLineJson: function (data) {
            return JSON.stringify(data, null, 0);
        }
    }
});

coz.render({
    force: true,
    mode: '444',
    path: 'render-by-my-custom-tmpl-01.json',
    // Use custom tmpl
    tmpl: 'singleLineJson',
    // Data to pass custom tmpl.
    data: {
        'generator': __filename,
        'coz is': 'wonderful'
    }
}, function (err) {
    console.log('Compile done with custom tmpl.');
});
```

Running this will generate:

**render-by-my-custom-tmpl-01.json** (generated file)
```
{"generator":"/Users/okuni/projects/coz/docs/examples/06-customize-coz/render-with-custom-tmpl.js","coz is":"wonderful","$$bud":{"cwd":"/Users/okuni/projects/coz/docs/examples/06-customize-coz","path":"/Users/okuni/projects/coz/docs/examples/06-customize-coz/render-by-my-custom-tmpl-01.json"}}
```

<a name="register-custom-template-engine"></a>
### Register Custom Template Engine.

By default, coz use [Handlebars](http://handlebarsjs.com/) as template engine.

You can register your own engine and use it from .bud files.


**render-with-custom-engine.js** (executable file)
```javascript
{@lang javascript}#!/usr/bin/env node

/**
 * render-with-custom-engine.js
 * This is an executable file for "examples/06-customize-coz"
 */


var Coz = require('coz').Coz;

// Create a custom coz context.
var coz = new Coz({
    // Define custom engines.
    engines: {
        'myCustomEngine01': {
            /**
             * Compile template string and create template function.
             * @implements {module:coz/lib/template~Engine.prototype.compile}
             * @param {string} source - Source string to compile.
             * @param {function} callback - Callback when done.
             */
            'compile': function (source, callback) {

                // Define a template function with source.
                // Template function takes a single agument `data` object and returns rendered string.

                /**
                 * Compiled template function
                 * @param {object} data - Data to render with.
                 * @returns {string} - Rendered string.
                 */
                function compiledTemplate(data) {
                    var rendered = String(source);
                    Object.keys(data).forEach(function (key) {
                        rendered = rendered.replace('__' + key + '___', data[key]);
                    });
                    return rendered;
                }

                // Pass the template function to callback.
                var err = null;
                callback(err, compiledTemplate);
            }
        }
    }
});

// Use custom coz context to render.
coz.render({
    force: true,
    mode: '444',
    // Use engine defined above.
    engine: 'myCustomEngine01',
    path: __dirname + '/render-by-my-custom-engine-01.txt',
    // Template source string to compile with the custom engine.
    tmpl: 'This is good day to __goodToDo___.',
    // Data to passed to compiled template function.
    data: {
        goodToDo: 'die'
    }
}, function (err) {
    console.log('Compile done with custom engine');
});
```

Running this will generate:

**render-by-my-custom-engine-01.txt** (generated file)
```
This is good day to die.
```

<a name="use-custom-config-from-cli"></a>
### Use Custom Configurations From CLI Interface.

To customize CLI Interface, create a configuration file and pass it's pathname to `--configuration` (or `-c`) options.

**use-custom-config-from-cli.config.js** (configuration file)
```
/**
 * use-custom-config-from-cli.config.js
 * This is a CLI configuration file for "examples/06-customize-coz"
 */

// Custom configuration for CLI
module.exports = {
    tmpls: {
        // Custom template function.
        myCustomTmpl01: function (data) {
            return JSON.stringify(data, null, 2);
        }
    }
};
```

**use-custom-config-from-cli.sh** (CLI shell)
```
#!/bin/bash

###
# use-custom-config-from-cli.sh
# This is a CLI shell file for "examples/06-customize-coz"
##

HERE=$(dirname $0)

cd ${HERE}

# Render bud with custom configuration.
coz render ".render-by-custom-cli.txt.bud" -c "use-custom-config-from-cli.config.js"
```

___


### See Also

<!-- See also start -->



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
[my_apiguide_url]: http://okunishinishi.github.io/coz/apiguide/
[tutorial_01_installing_coz_url]: tutorial-01%20-%20Installing%20coz.html
[tutorial_02_rendering_bud_files_url]: tutorial-02%20-%20Rendering%20bud%20files.html
[tutorial_03_mastering_coz_bud_url]: tutorial-03%20-%20Mastering%20coz%20bud.html
[tutorial_04_using_programmatic_a_p_i_url]: tutorial-04%20-%20Using%20programmatic%20API.html
[tutorial_05_customizing_coz_url]: tutorial-05%20-%20Customizing%20coz.html

<!-- URLs end -->