### Overview

With coz, you can generate any file with *2* step.

1. Create a `.bud` file.
2. Run `coz render` command.

A bud contains file meta data like:

+ Which template to use?
+ Where to render it?
+ What permission to give?

, and so on.

For more detail see the next tutorial **


*****

### Basic usage.


The most simple usage is generate a single file from a single `.bud` file.

Here is an example:

**.who-likes-what.txt.bud** (bud file)
```javascript
/**
 * .who-likes-what.txt.bud
 * This is a bud file for "examples/01-minimum-demo"
 */

// Exports as a Node.js module.
module.exports = {

    // Template string. By default, parsed by Handlebars engine.
    tmpl: '{{#each members}}Hi, my name is {{@key}}. I like {{this}}.\n{{/each}}',

    // Overwrite when already existing.
    force: true,

    // File path to write out.
    path: 'who-likes-what.txt',

    // File permission.
    mode: '444',

    // Data to render.
    data: {
        members: {
            "Mai": "apple",
            "Tom": "Orange",
            "Rita": "Banana"
        }
    }
};

```

As you see, `.bud` file is actuary a JavaScript file and could be exportsd an a Node.js module.

Save this file as `.who-likes-what.txt.bud` and then, run:

```bash
# Render the bud file
$ coz render ".who-likes-what.txt.bud"
```

This will generate a file named `who-likes-what.txt`.

**who-likes-what.txt** (generated file)
```
Hi, my name is Mai. I like apple.
Hi, my name is Tom. I like Orange.
Hi, my name is Rita. I like Banana.

```

*****


### Separate template and data.

For more comple rending, you may want to save template and and to seperated files from the `.bud` file.

`tmpl` attribute could be a file path.

`data` attribute may be required js/json module.


**.what-colors.html.bud** (bud file)

```javascript
/**
 * .what-colors.html.bud
 * This is a bud file for "examples/02-separated-template"
 */

// Exports as a Node.js module.
module.exports = {

    // Template file path. Relative to this bud file.
    tmpl: '.what-colors.html.hbs',

    // Overwrite when already existing.
    force: true,

    // File path to write out.
    path: 'what-colors.html',

    // File permission.
    mode: '444',

    // Data to render.
    data: require('./.what-colors.html.json')
};


```

**.what-colors.html.hbs** (template file)

```xml
<table>
    <caption>Colors</caption>
    <tbody>
    {{#each colors}}
        <tr><th>{{@key}}</th>{{this}}</tr>
    {{/each}}
    </tbody>
</table>
```

And run:

```bash
# Render the bud file
$ coz render ".what-colors.html.bud"
```

will generate:

**what-colors.html** (generated file)
```xml
<table>
    <caption>Colors</caption>
    <tbody>
        <tr><th>banana</th>yellow</tr>
        <tr><th>apple</th>red</tr>
        <tr><th>grape</th>purple</tr>
    </tbody>
</table>
```


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

+ [coz @ npm][my_npm_url]

<!-- URLs start -->

[nodejs_url]: http://nodejs.org/
[nodejs_download_url]: https://nodejs.org/download/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[my_npm_url]: http://www.npmjs.org/package/coz
[tutorial_01_installing_coz_url]: 01%20-%20Installing%20coz.md
[tutorial_02_rendering_bud_files_url]: 02%20-%20Rendering%20bud%20files.md
[tutorial_03_digging_deeper_into_bud_url]: 03%20-%20Digging%20deeper%20into%20bud.md
[tutorial_04_using_programmatic__a_p_i_url]: 04%20-%20Using%20programmatic%20API.md
[tutorial_05_customizing_coz_url]: 05%20-%20Customizing%20coz.md

<!-- URLs end -->