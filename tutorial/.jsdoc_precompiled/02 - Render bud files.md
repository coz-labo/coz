### Overview

With coz, you can generate any file with two step.

1. Prepare a `.bud` file.
2. Run `coz render` command.

A bud contains file meta data like *witch template to use*, *where to render it*, *what permission to give*, and so on.
___

### Render a single file.

At first,  prepare a `.bud` file.

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

As you see, `.bud` file is actuary a JavaScript file and exports contents with Node.js way.

Save this file as `.who-likes-what.txt.bud` and then,

```bash
$ coz render .who-likes-what.txt.bud
```

This will generate a file named `who-likes-what.txt`.

```
Hi, my name is Mai. I like apple.
Hi, my name is Tom. I like Orange.
Hi, my name is Rita. I like Banana.

```

___

### Seperate template and data.

```javascript

```