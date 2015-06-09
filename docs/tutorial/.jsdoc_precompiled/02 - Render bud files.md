### Overview

With coz, you can generate any file with *2* step.

1. Create a `.bud` file.
2. Run `coz render` command.

A bud contains file meta data like:

+ *which template to use*
+ *where to render it*
+ *what permission to give*

, and so on.

For more


*****

### Basic usage.


The most simple usage is generate a single file from a single `.bud` file.

Here is an example:

**.who-likes-what.txt.bud** (bud file)
```javascript
{@lang javascript}/**
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

As you see, `.bud` file is actuary a JavaScript file and exports contents with Node.js way.

Save this file as `.who-likes-what.txt.bud` and then,

```bash
{@lang bash}$ coz render ".who-likes-what.txt.bud"
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
{@lang javascript}/**
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
{@lang xml}<table>
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
{@lang bash}$ coz render .what-colors.html.bud
```

will generate:

**what-colors.html** (generated file)
```xml
{@lang xml}<table>
    <caption>Colors</caption>
    <tbody>
        <tr><th>banana</th>yellow</tr>
        <tr><th>apple</th>red</tr>
        <tr><th>grape</th>purple</tr>
    </tbody>
</table>
```