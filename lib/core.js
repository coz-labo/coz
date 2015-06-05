/**
 * Node js core modules.
 * @module planter/lib/core
 * @property {object} assert - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} buffer - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} childProcess - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} cluster - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} crypto - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} dgram - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} dns - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} domain - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} events - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} fs - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} http - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} https - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} net - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} os - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} path - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} punycode - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} querystring - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} readline - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} stream - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} stringDecoder - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} tls - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} tty - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} url - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} util - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} vm - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} zlib - The node.js {@link http://nodejs.org/api/.html| module}. 
 * @property {object} smalloc - The node.js {@link http://nodejs.org/api/.html| module}. 
 */

"use strict";

module.exports = {
    get assert() { return require('assert'); },
        get buffer() { return require('buffer'); },
        get childProcess() { return require('child_process'); },
        get cluster() { return require('cluster'); },
        get crypto() { return require('crypto'); },
        get dgram() { return require('dgram'); },
        get dns() { return require('dns'); },
        get domain() { return require('domain'); },
        get events() { return require('events'); },
        get fs() { return require('fs'); },
        get http() { return require('http'); },
        get https() { return require('https'); },
        get net() { return require('net'); },
        get os() { return require('os'); },
        get path() { return require('path'); },
        get punycode() { return require('punycode'); },
        get querystring() { return require('querystring'); },
        get readline() { return require('readline'); },
        get stream() { return require('stream'); },
        get stringDecoder() { return require('string_decoder'); },
        get tls() { return require('tls'); },
        get tty() { return require('tty'); },
        get url() { return require('url'); },
        get util() { return require('util'); },
        get vm() { return require('vm'); },
        get zlib() { return require('zlib'); },
        get smalloc() { return require('smalloc'); }
};