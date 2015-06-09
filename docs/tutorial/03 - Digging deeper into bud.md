### Auto filling properties.

### Configurable properteis.

Name | Type | Description
----- | ----- | -----

    engine | string&#124;object | Template compile function or name of function | 
    cwd | string | Working directory path | 
    data | object | Data to template render with | 
    mkdirp | boolean | Make parent directories if needed | 
    setup | object | Properties to set engine | 
    force | boolean | Should overwrite file when already exists, or not | 
    mode | string&#124;number | File permission | 
    path | string | Destination file path. If not provided, guess from bud file path | 
    tmpl | string&#124;function | Template file path or registered template name or template function | 