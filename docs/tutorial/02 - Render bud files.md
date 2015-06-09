The most powerful feature of coz is rendering files from files.

First you prepare a `.bud` file.
A bud contains file meta data like witch template to use, where to render it, what permission to give, and so on.

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
