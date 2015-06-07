Bud
---------

`.bud` file contains all meta data of file to generate.
They are actually a javascript file and could be written nodejs format.

```Javascript

module.exports = {
    path: 'my_file.txt',
    tmpl: '.my_file.txt.hbs',
    data: require('./.my_data')
}

```

### Supported properties for a bud.

Name | Type | Description
----- | ----- | -----
{{#each bud.properties}}
{{name}} | {{type}} | {{description}} |
{{/each}}