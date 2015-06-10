About {{pkg.name}}
------

### What's this?

The basic idea of {{pkg.name}} is that creating files from files.

+ Writing a meta file called [.bud file](#spec-bud-spec).
+ Running `{{pkg.name}} render` command.
+ Files will be generated!

<img style="height:256px;" src="assets/images/coz-outline.jpg" height="256">


### What For?

Automation. Generating files makes your project clean and maintainable.

You can define a single datasource and distribute it in various forms.

For example,

+ Generate Javascript and Python code from database definition.
+ Generate `package.json` and `bower.json` sharing same meta data.
+ Generate Web API document and Swift client entity from json schema objects.
+ Generate empty test case files from project files.


### Why This?

+ **Lightweight and fast**
    + {{pkg.name}} doing nothing bud file templating, it's very fast.
+ **Unopinionated and flexible**
    + {{pkg.name}} could be used to any kind of strings files.
+ **Simple and extensible**
    + {{pkg.name}} provides ways to customize, like registering you own template engine.


