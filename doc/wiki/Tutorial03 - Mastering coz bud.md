### Configurable Properties.

List of properties configurable in bud files.

| Name | Type | Default | Description |
| ----- | ----- | ----- | ----- |
| `engine` | string&#124;object | &#x27;handlebars&#x27; | Template engine name or engine itself |
| `cwd` | string | process.cwd() | Working directory path |
| `data` | object |  | Data which template render with |
| `mkdirp` | boolean | false | Make parent directories if needed |
| `setup` | object |  | Optional settings for template engine |
| `force` | boolean | false | Should overwrite file when already exists, or not |
| `mode` | string&#124;number | &#x27;644&#x27; | Permission of generated files. (eg., &#x27;444&#x27; for readonly files) |
| `path` | string |  | Destination file path. If not provided, guess from bud file path |
| `tmpl` | string&#124;function | &#x27;json&#x27; | Template file path or registered template name or template function |



### Understanding Auto Filling Properties.

Some properties are optional and coz guess missing properties with some rules.

| Property | Guessing Rule |
| --- | --- |
| `tmpl` | If `tmpl` is not provided, coz guess it from bud file path. <br/> For example, **_".my-world.txt.bud"_** without `tmpl` property  search template with pattern **_".my-world.txt.\*"_**. <br/> If no template found, uses JSON template as fallback. |
| `path` | If `path` is not provided, coz guess it from bud file path. <br/> Remove `/^\./` and `/\.bud$/` from basename and use it as writeout path. <br/> For example, **_".my-world.txt.bud"_** without `path` property will generate **_"my-world.txt"_**. |


___

### See Also

<!-- See also start -->

+ [04 - Using programmatic API][tutorial_04_using_programmatic_a_p_i_url]

<!-- See also end -->

### Links

+ [coz @ npm][my_npm_url]


### Tutorials

<!-- Tutorials start -->

+ [01 - Installing coz][tutorial_01_installing_coz_url]
+ [02 - Rendering bud files][tutorial_02_rendering_bud_files_url]
+ [03 - Mastering coz bud][tutorial_03_mastering_coz_bud_url]
+ [04 - Using programmatic API][tutorial_04_using_programmatic_a_p_i_url]
+ [05 - Customizing coz][tutorial_05_customizing_coz_url]

<!-- Tutorials end -->


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