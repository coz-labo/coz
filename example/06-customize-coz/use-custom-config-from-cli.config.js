/**
 * use-custom-config-from-cli.config.js
 * This is a CLI configuration file for "examples/06-customize-coz"
 */

// Custom configuration for CLI
module.exports = {
    tmpls: {
        // Custom template function.
        myCustomTmpl01: function (data) {
            return JSON.stringify(data, null, 2);
        }
    }
};