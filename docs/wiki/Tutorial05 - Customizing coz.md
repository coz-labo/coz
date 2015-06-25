
### Register Custom Template Engine.

By default, coz use [Handlebars](http://handlebarsjs.com/) as template engine.

You can register your own engine and use it from .bud files.


```javascript
#!/usr/bin/env node

/**
 * render-with-custom-engine.js
 * This is an executable file for "examples/06-customize-coz/render-with-custom-engine.js"
 */


var Coz = require('coz').Coz;

// Create a custom coz context.
var coz = new Coz({
    engines: {
        // Register a custom engine.
        'myCustomEngine01': {
            // Aliases for this engine.
            // These names also can be used in `engine` property of bud.
            $aliases: [
                'myCustom01'
            ],
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
                 * @returns {string}
                 */
                function compiledTemplate(data) {
                    var rendered = String(source);
                    Object.keys(data).forEach(function (key) {
                        rendered = rendered.replace('__' + key + '___', data[key]);
                    });
                    return rendered;
                }

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
    data: {
        goodToDo: 'die'
    }
}, function (err) {
    console.log('done!');
});
```


___


### See also

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
[tutorial_01_installing_coz_url]: 01%20-%20Installing%20coz.md
[tutorial_02_rendering_bud_files_url]: 02%20-%20Rendering%20bud%20files.md
[tutorial_03_mastering_coz_bud_url]: 03%20-%20Mastering%20coz%20bud.md
[tutorial_04_using_programmatic_a_p_i_url]: 04%20-%20Using%20programmatic%20API.md
[tutorial_05_customizing_coz_url]: 05%20-%20Customizing%20coz.md

<!-- URLs end -->