{
    "urls": "<!-- URLs start -->\n\n[nodejs_url]: http://nodejs.org/\n[nodejs_download_url]: https://nodejs.org/download/\n[npm_url]: https://www.npmjs.com/\n[nvm_url]: https://github.com/creationix/nvm\n[my_npm_url]: http://www.npmjs.org/package/coz\n[tutorial_01_installing_coz_url]: tutorial-01%20-%20Installing%20coz.html\n[tutorial_02_rendering_bud_files_url]: tutorial-02%20-%20Rendering%20bud%20files.html\n[tutorial_03_digging_deeper_into_bud_url]: tutorial-03%20-%20Digging%20deeper%20into%20bud.html\n[tutorial_04_using_programmatic__a_p_i_url]: tutorial-04%20-%20Using%20programmatic%20API.html\n[tutorial_05_customizing_coz_url]: tutorial-05%20-%20Customizing%20coz.html\n\n<!-- URLs end -->",
    "tutorials": "<!-- Tutorials start -->\n\n+ [01 - Installing coz][tutorial_01_installing_coz_url]\n+ [02 - Rendering bud files][tutorial_02_rendering_bud_files_url]\n+ [03 - Digging deeper into bud][tutorial_03_digging_deeper_into_bud_url]\n+ [04 - Using programmatic API][tutorial_04_using_programmatic__a_p_i_url]\n+ [05 - Customizing coz][tutorial_05_customizing_coz_url]\n\n<!-- Tutorials end -->",
    "pkg": {
        "name": "coz",
        "version": "1.0.7",
        "description": "Flexible generator, which makes your project clean and maintainable.",
        "main": "lib/index.js",
        "bin": {
            "coz": "bin/coz"
        },
        "scripts": {
            "unittest": "nodeunit",
            "cover": "istanbul cover nodeunit",
            "report": "codeclimate",
            "apiguide": "jsdoc"
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/okunishinishi/coz.git"
        },
        "keywords": [
            "development",
            "generator",
            "sourcecode"
        ],
        "author": {
            "name": "Taka Okunishi",
            "url": "http://okunishitaka.com"
        },
        "license": {
            "type": "MIT",
            "url": "https://raw.githubusercontent.com/okunishinishi/coz/master/LICENSE"
        },
        "bugs": {
            "url": "https://github.com/okunishinishi/coz/issues"
        },
        "homepage": "https://github.com/okunishinishi/coz#readme",
        "dependencies": {
            "async": "^1.2.0",
            "cli-color": "^1.0.0",
            "commander": "^2.8.1",
            "glob": "^5.0.10",
            "handlebars": "^3.0.3",
            "minimatch": "^2.0.8",
            "mkdirp": "^0.5.1",
            "uglify-js": "^2.4.23"
        },
        "devDependencies": {
            "codeclimate-test-reporter": "0.0.4",
            "ink-docstrap": "^0.4.12",
            "istanbul": "^0.3.14",
            "jsdoc": "^3.3.0",
            "nodeunit": "^0.9.1"
        },
        "engines": {
            "node": ">=0.10.3"
        }
    },
    "bud": {
        "about": "A bud contains file meta data like witch template to use, where to render it, what permission to give, and so on.",
        "properties": [
            {
                "configurable": true,
                "default": "'handlebars'",
                "description": "Template compile function or name of function",
                "required": false,
                "type": "string&#124;object",
                "typeAsArray": "'string' ,'object'",
                "optional": true,
                "name": "engine"
            },
            {
                "configurable": true,
                "default": "process.cwd()",
                "description": "Working directory path",
                "required": false,
                "type": "string",
                "typeAsArray": "'string'",
                "optional": true,
                "name": "cwd"
            },
            {
                "configurable": true,
                "description": "Data to template render with",
                "required": true,
                "type": "object",
                "typeAsArray": "'object'",
                "optional": false,
                "name": "data"
            },
            {
                "configurable": false,
                "description": "Done to writeout or not",
                "type": "boolean",
                "typeAsArray": "'boolean'",
                "optional": true,
                "name": "done"
            },
            {
                "configurable": true,
                "description": "Make parent directories if needed",
                "default": false,
                "type": "boolean",
                "typeAsArray": "'boolean'",
                "optional": true,
                "name": "mkdirp"
            },
            {
                "configurable": true,
                "description": "Properties to set engine",
                "required": false,
                "type": "object",
                "typeAsArray": "'object'",
                "optional": true,
                "name": "setup"
            },
            {
                "configurable": true,
                "description": "Should overwrite file when already exists, or not",
                "default": "false",
                "required": false,
                "type": "boolean",
                "typeAsArray": "'boolean'",
                "optional": true,
                "name": "force"
            },
            {
                "configurable": true,
                "description": "File permission",
                "default": "'644'",
                "required": false,
                "type": "string&#124;number",
                "typeAsArray": "'string' ,'number'",
                "optional": true,
                "name": "mode"
            },
            {
                "configurable": true,
                "description": "Destination file path. If not provided, guess from bud file path",
                "required": false,
                "type": "string",
                "typeAsArray": "'string'",
                "optional": true,
                "name": "path"
            },
            {
                "configurable": false,
                "description": "Bud source file path",
                "type": "string",
                "typeAsArray": "'string'",
                "optional": true,
                "name": "src"
            },
            {
                "configurable": true,
                "default": "'json'",
                "description": "Template file path or registered template name or template function",
                "required": "false",
                "type": "string&#124;function",
                "typeAsArray": "'string' ,'function'",
                "optional": false,
                "name": "tmpl"
            }
        ]
    },
    "$$bud": {
        "cwd": "/Users/okuni/projects/coz/docs/tutorial",
        "src": "/Users/okuni/projects/coz/docs/tutorial/.md.bud",
        "path": "/Users/okuni/projects/coz/docs/tutorial/.jsdoc_precompiled/05 - Customizing coz.md"
    }
}