coz
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![Dependency Status][bd_gemnasium_shield_url]][bd_gemnasium_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/coz-repo/coz
[bd_travis_url]: http://travis-ci.org/coz-repo/coz
[bd_travis_shield_url]: http://img.shields.io/travis/coz-repo/coz.svg?style=flat
[bd_license_url]: https://github.com/coz-repo/coz/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/coz-repo/coz
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/coz-repo/coz.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/coz-repo/coz.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/coz-repo/coz
[bd_gemnasium_shield_url]: https://gemnasium.com/coz-repo/coz.svg
[bd_npm_url]: http://www.npmjs.org/package/coz
[bd_npm_shield_url]: http://img.shields.io/npm/v/coz.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/coz.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Flexible generator, which makes your project clean and maintainable.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>

<a href="http://coz-repo.github.io/coz/homepage"><img style="height:128px;" src="doc/images/coz-banner.png" height="128"/></a>


```javascript
// Define rendering rule.
module.exports = {
    path: 'have-a-nice-day.txt', // File path to write
    tmpl: '.have-a-nice-day.txt.hbs', // Template file
    force: true, // Overwrite each time
    mode: '444',  // As readyonly file
    data: require('./my-datasource.json') // Data to render
}
```

Save this as ***.my-first-bud.bud*** , then running 
 
```bash
$ coz render ".my-first-bud.bud"
```

will do the magic.


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01-about.md.hbs" Start -->

<a name="section-doc-readme-01-about-md"></a>
About coz
------

### What's This?

The basic idea of coz is that creating files from files.

+ Writing a meta file called [.bud file](#spec-bud-spec).
+ Running `coz render` command.
+ Files will be generated!

<img style="height:256px;" src="doc/images/coz-outline.jpg" height="256">


### What For?

Automation. Generating files makes your project clean and maintainable.

You can define a single datasource and distribute it in various forms.

For example,

+ Generate Javascript and Python entity from database definition.
+ Generate `package.json` and `bower.json` sharing same meta data.
+ Generate Web API document and Swift client entity from json schema objects.
+ Generate empty test case files from project files.


### Why This?

+ **Lightweight and fast**
    + coz does nothing bud file templating, it's very fast.
+ **Unopinionated and flexible**
    + coz could be used to any kind of strings files.
    + Bunch of options to manipulate files.
    + Could be used by CLI or programmatically.
+ **Simple and extensible**
    + coz provides ways to customize, like registering your own template engine.



<!-- Section from "doc/readme/01-about.md.hbs" End -->

<!-- Section from "doc/readme/02-howto.md.hbs" Start -->

<a name="section-doc-readme-02-howto-md"></a>
Getting started
------

### Requirements

+ [node.js&gt;&#x3D;0.10.3][nodejs_url]


### Installation

coz is available as an [npm][npm_url] package.

```bash
# Install coz as a global module.
$ npm install coz -g
```

Or you can install it without `-g` option and use [Programmatic API](#programmatic-api).
For more details, see tutorial section "[01 - Installing coz][01_installing_coz_url]".


### Quickstart

**.who-likes-what.txt.bud** (bud file)
```javascript

```

As you see, `.bud` file is actuary a JavaScript file and could be exported a Node.js module.

Save this file as `.who-likes-what.txt.bud` and then, run:

```bash
# Render the bud file
$ coz render ".who-likes-what.txt.bud"
```

This will generate a file named `who-likes-what.txt`.

For more details, see tutorial section "[02 - Rendering bud files][02_rendering_bud_files_url]".


<a name="programmatic-api" />
### Programmatic API

coz provides programmatic API which enables you to execute coz commands from Node.js program.

```javascript

```

For more details, see tutorial section "[04 - Using programmatic API][04_using_programmatic_a_p_i_url]".


<!-- Section from "doc/readme/02-howto.md.hbs" End -->

<!-- Section from "doc/readme/03-spec.md.hbs" Start -->

<a name="section-doc-readme-03-spec-md"></a>
Specifications
---------

<a name="spec-bud-spec"></a>
### Bud File Specification

A bud contains file meta data like witch template to use, where to render it, what permission to give, and so on.

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
| `` | string|object | &#x27;handlebars&#x27; | Template engine name or engine itself |
| `` | string | process.cwd() | Working directory path |
| `` | object |  | Data which template render with |
| `` | boolean | false | Make parent directories if needed |
| `` | object |  | Optional settings for template engine |
| `` | boolean | false | Should overwrite file when already exists, or not |
| `` | string|number | &#x27;644&#x27; | Permission of generated files. (eg., &#x27;444&#x27; for readonly files) |
| `` | string |  | Destination file path. If not provided, guess from bud file path |
| `` | string|function | &#x27;json&#x27; | Template file path or registered template name or template function |



<!-- Section from "doc/readme/03-spec.md.hbs" End -->

<!-- Section from "doc/readme/09-links.md.hbs" Start -->

<a name="section-doc-readme-09-links-md"></a>
Links
------

### Website

+ [coz](http://coz-repo.github.io/coz/homepage)
+ [coz @npm][my_npm_url]
+ [coz @github][my_repo_url]

### Tutorials


### Documents

[![Inline doc][my_inch_badge_url]][my_inch_url]

+ [API Guide][my_apiguide_url]

### Reports

+ [Build Status @travis][my_travis_url]
+ [Analysis Result @codeclimate][my_codeclimate_url]
+ [Issues @github](https://github.com/coz-repo/coz/issues)
+ [Coverage Report][my_coverage_url]

<!-- Section from "doc/readme/09-links.md.hbs" End -->

<!-- Section from "doc/readme/10-license.md.hbs" Start -->

<a name="section-doc-readme-10-license-md"></a>
License
-------
This software is released under the [MIT License][my_license_url].

<!-- Section from "doc/readme/10-license.md.hbs" End -->

<!-- Section from "doc/readme/11-project.md.hbs" Start -->

<a name="section-doc-readme-11-project-md"></a>
About this project
--------

[![Bitdeli Badge][my_bitdeli_badge_url]][bitdeli_url]

### Author

+ [Taka Okunishi](http://okunishitaka.com)

### Donation

Support this project and [others by okunishinishi][my_gratipay_url] via [gratipay][my_gratipay_url].

[<img src="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg" alt="Support via Gratipay"/>][my_gratipay_url]

<!-- Section from "doc/readme/11-project.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/coz-repo/coz/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [coz-examples](https://github.com/coz-repo/coz-examples#04-from-programmatic-api)

<!-- Links End -->
