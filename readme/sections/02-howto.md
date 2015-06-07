Getting started
------

### Requirements

+ [node.js][nodejs_url]


### Install

```bash

$ npm install {{pkg.name}} -g

```

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

\{{#each entities}}
/** Entity for \{{snakecase name}} */
module.exports = function \{{pascalcase name}}Entity(){
};
\{{/each}}

```

Step03 **Render file**
```bash
$ {{pkg.name}} render .*.bud
```