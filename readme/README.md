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


Flexible generator.

<!-- Banner start -->

<a href="http://nodejs.org/"><img style="height:40px;" src="http://nodejs.org/images/logos/nodejs-dark.png" height="40"></a>&nbsp;
<!-- Banner end -->

Table of Contents
-----
- [About coz](#01-about)
    - [### What's this?](#01-about---whats-this)
    - [### Why this?](#01-about---why-this)
- [Getting started](#02-howto)
    - [### Requirements](#02-howto---requirements)
    - [### Install](#02-howto---install)
    - [### Simple example](#02-howto---simple-example)


<a name="01-about"></a>
About coz
------

<a name="01-about---whats-this"></a>
### What's this?

File generator.
coz, you can keep your source code maintainable and readable.



<a name="01-about---why-this"></a>
### Why this?

+ No more meta programming
+ Any programming language
+ Extensible
+ Fast


<a name="02-howto"></a>
Getting started
------

<a name="02-howto---requirements"></a>
### Requirements

+ [node.js][nodejs_url]


<a name="02-howto---install"></a>
### Install

```bash

$ npm install coz -g

```

<a name="02-howto---simple-example"></a>
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

<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[my_license_url]: http://raw.github.com/okunishinishi/leaf/master/LICENSE
[my_travis_url]: http://travis-ci.org/okunishinishi/leaf
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/leaf.svg?style=flat
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/leaf
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/leaf.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/leaf.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/leaf/apiguide/
[my_coverage_report_url]: http://okunishinishi.github.io/leaf/coverage/lcov-report/
[my_gittip_url]: http://www.gittip.com/okunishinishi/
[my_gittip_budge_url]: http://img.shields.io/gittip/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/leaf
[my_npm_budge_url]: http://img.shields.io/npm/v/leaf.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/leaf/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/leaf.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/okunishinishi/leaf
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/okunishinishi/leaf.svg?style=flat
<!-- Links end-->