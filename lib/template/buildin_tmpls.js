"use strict";


exports.jsonTmpl = (function () {
    function jsonTmpl(data) {
        return JSON.stringify(data, null, 4);
    }

    jsonTmpl.$name = 'json';
    jsonTmpl.$aliases = [
        'jsn',
        'jsonTmpl'
    ];
    return jsonTmpl;
})();

exports.textTmpl = (function () {
    function textTmpl(data) {
        return String(data);
    }

    textTmpl.$name = 'text';
    textTmpl.$aliases = [
        'txt',
        'textTmpl'
    ];
    return textTmpl;
})();