/**
 * External modules, installed via npm.
 * @module leaf/lib/ext
 * @property {object} async - The npm {@link https://www.npmjs.org/package/| module}@^1.2.0. 
 * @property {object} cliColor - The npm {@link https://www.npmjs.org/package/| module}@^1.0.0. 
 * @property {object} commander - The npm {@link https://www.npmjs.org/package/| module}@^2.8.1. 
 * @property {object} glob - The npm {@link https://www.npmjs.org/package/| module}@^5.0.10. 
 * @property {object} handlebars - The npm {@link https://www.npmjs.org/package/| module}@^3.0.3. 
 * @property {object} minimatch - The npm {@link https://www.npmjs.org/package/| module}@^2.0.8. 
 * @property {object} mkdirp - The npm {@link https://www.npmjs.org/package/| module}@^0.5.1. 
 */

"use strict";

module.exports = {
    get async() { return require('async'); },
    get cliColor() { return require('cli-color'); },
    get commander() { return require('commander'); },
    get glob() { return require('glob'); },
    get handlebars() { return require('handlebars'); },
    get minimatch() { return require('minimatch'); },
    get mkdirp() { return require('mkdirp'); }
};