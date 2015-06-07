coz
=====
<!-- Badge start -->

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]
[![npm version][my_npm_budge_url]][my_npm_url]
[![Git tip][my_gittip_budge_url]][my_gittip_url]
<!-- Badge end -->


Flexible generator, which makes your project clean and maintainable.


<a href="https://github.com/okunishinishi/coz#readme"><img style="height:128px;" src="assets/images/coz-banner.jpg" height="128"/></a>


Table of Contents
-----
- [About coz](#01-about)
    - [What's this?](#01-about--whats-this)
    - [When to use?](#01-about--when-to-use)
    - [Why this?](#01-about--why-this)
- [Getting started](#02-howto)
    - [Requirements](#02-howto--requirements)
    - [Install](#02-howto--install)
    - [Simple example](#02-howto--simple-example)
- [Links](#09-links)
    - [Documents](#09-links--documents)
    - [Reports](#09-links--reports)
- [License](#10-license)
- [About this project](#11-project)
    - [Author](#11-project--author)
    - [Donation](#11-project--donation)


<a name="01-about"></a>
About coz
------

<a name="01-about--whats-this"></a>
### What's this?

The basic idea of coz is that creating file from file.

Write a meta file called `.bud` file and run coz generates the magic.

<img style="height:128px;" src="assets/images/coz-outline.jpg" height="128">

This could be useful when you generate source code or documentations.


<a name="01-about--when-to-use"></a>
### When to use?



<a name="01-about--why-this"></a>
### Why this?


<a name="02-howto"></a>
Getting started
------

<a name="02-howto--requirements"></a>
### Requirements

+ [node.js][nodejs_url]


<a name="02-howto--install"></a>
### Install

```bash

$ npm install coz -g

```

<a name="02-howto--simple-example"></a>
### Simple example

Step01 **Configure bud file**

```Javascript
module.exports = {
    force: true,
    mode: '444',
    data: {
        entities: [
            {name: 'User'},
            {name: 'Machine'},
        ]
    }
}
```

Step02 **Prepare template**
```Javascript

{{#each entities}}
/** Entity for {{snakecase name}} */
module.exports = function {{pascalcase name}}Entity(){
};
{{/each}}

```

Step03 **Render file**
```bash
$ coz render .*.bud
```
<a name="09-links"></a>
Links
------

<a name="09-links--documents"></a>
### Documents

+ [APIGUIDE][my_apiguide_url]

<a name="09-links--reports"></a>
### Reports

+ [Build Status @travis][my_travis_url]
+ [Analysis Result @codeclimate][my_codeclimate_url]
+ [Issues @github](https://github.com/okunishinishi/coz/issues)
+ [Coverage Report][my_coverage_url]

<a name="10-license"></a>
License
-------
This software is released under the [MIT License][my_license_url].

<a name="11-project"></a>
About this project
--------

<a name="11-project--author"></a>
### Author

+ [Taka Okunishi](http://okunishitaka.com)

<a name="11-project--donation"></a>
### Donation

Support this project and [others by okunishinishi][my_gittip_url] via [gittip][my_gittip_url].

[<img src="https://rawgithub.com/twolfson/gittip-badge/0.2.0/dist/gittip.png" alt="Support via Gittip"/>][my_gittip_url]


<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[my_license_url]: http://raw.github.com/okunishinishi/coz/master/LICENSE
[my_travis_url]: http://travis-ci.org/okunishinishi/coz
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/coz.svg?style=flat
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/coz
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/coz.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/coz.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/coz/apiguide/
[my_coverage_url]: http://okunishinishi.github.io/coz/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/coz/coverage/lcov-report/
[my_gittip_url]: http://www.gittip.com/okunishinishi/
[my_gittip_budge_url]: http://img.shields.io/gittip/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/coz
[my_npm_budge_url]: http://img.shields.io/npm/v/coz.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/coz/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/coz.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/okunishinishi/coz
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/okunishinishi/coz.svg?style=flat
<!-- Links end-->