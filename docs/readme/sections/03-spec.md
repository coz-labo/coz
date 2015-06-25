Specifications
---------

<a name="spec-bud-spec"></a>
### Bud File Specification

{{bud.about}}

You can specify bud data by writing `.bud` file, which is actually a javascript file and could be written in Node.js format.

```javascript
module.exports = {
    path: 'my_file.txt',
    tmpl: '.my_file.txt.hbs',
    data: require('./.my_data')
}
```

And bud could be an array like:

```javascript
module.exports = [
    {path: 'my_file.txt', /*...*/},
    {path: 'my_other_file.txt', /*...*/},
]
```

Or an async function.

```javascript
module.exports = function(callback){
    myAsync(function(data){
        var error = null;
        callback(err, data);
    });
}
```

For more details, see tutorial section "[03 - Mastering coz bud][03_mastering_coz_bud_url]".

##### Supported Properties

List of properties configurable in bud files.

| Name | Type | Default | Description |
| ----- | ----- | ----- | ----- |
{{#each bud.properties}}{{#if configurable}}| `{{name}}` | {{{type}}} | {{default}} | {{description}} |
{{/if}}{{/each}}

