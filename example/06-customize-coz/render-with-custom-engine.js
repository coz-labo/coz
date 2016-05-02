#!/usr/bin/env node

/**
 * render-with-custom-engine.js
 * This is an executable file for "examples/06-customize-coz"
 */


var Coz = require('coz').Coz;

// Create a custom coz context.
var coz = new Coz({
    // Define custom engines.
    engines: {
        'myCustomEngine01': {
            // Aliases for this engine.
            // These names also can be used in "engine" property of bud.
            $aliases: [
                'myCustom01'
            ],
            /**
             * Compile template string and create template function.
             * @implements {module:coz/lib/template~Engine.prototype.compile}
             * @param {string} source - Source string to compile.
             * @param {function} callback - Callback when done.
             */
            'compile': function (source, callback) {

                // Define a template function with source.
                // Template function takes a single agument `data` object and returns rendered string.

                /**
                 * Compiled template function
                 * @param {object} data - Data to render with.
                 * @returns {string} - Rendered string.
                 */
                function compiledTemplate(data) {
                    var rendered = String(source);
                    Object.keys(data).forEach(function (key) {
                        rendered = rendered.replace('__' + key + '___', data[key]);
                    });
                    return rendered;
                }

                // Pass the template function to callback.
                var err = null;
                callback(err, compiledTemplate);
            }
        }
    }
});

// Use custom coz context to render.
coz.render({
    force: true,
    mode: '444',
    // Use engine defined above.
    engine: 'myCustomEngine01',
    path: __dirname + '/render-by-my-custom-engine-01.txt',
    // Template source string to compile with the custom engine.
    tmpl: 'This is good day to __goodToDo___.',
    // Data to passed to compiled template function.
    data: {
        goodToDo: 'die'
    }
}, function (err) {
    console.log('Compile done with custom engine');
});