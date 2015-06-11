Specifications
---------

<a name="spec-bud-spec"></a>
### Bud file specification.

{{bud.about}}

You can specify bud data by writing `.bud` file, which is actually a javascript file and could be written nodejs format.

```Javascript
module.exports = {
    path: 'my_file.txt',
    tmpl: '.my_file.txt.hbs',
    data: require('./.my_data')
}
```

And bud could be an array like:

```Javascript
module.exports = [
    {path: 'my_file.txt', /*...*/},
    {path: 'my_other_file.txt', /*...*/},
]
```

Or an async function.

```Javascript
module.exports = function(callback){
    myAsync(function(data){
        var error = null;
        callback(err, data);
    });
}
```

##### Supported properties

| Name | Type | Description |
| ----- | ----- | ----- |
{{#each bud.properties}}{{#if configurable}} | {{name}} | {{{type}}} | {{description}} |
{{/if}}{{/each}}

