/* jshint node: true */
/* global __base */

var path = require('path');
var ec = require('editorconfig-parser');
var _ = require('lodash');

var mergeFile = require(path.posix.join(__base, 'util', 'merge-file.js'));

var DEFAULT_SPACES = 4;

function validateStr(str) {
    if (!str || typeof str !== 'string' || str.trim() === '') {
        return '';
    }

    return str;
}

function merge(existing, source) {
    existing = validateStr(existing);
    source = validateStr(source);

    // let these throw, the merge helper will
    // catch errors and handle them correctly
    var eData = ec.parse(existing);
    var sData = ec.parse(source);

    var merged = _.merge(eData, sData);

    return ec.serialize(merged);
}

function getSpaces(opts) {
    return (opts.spaces == +opts.spaces) ?
        opts.spaces :
        DEFAULT_SPACES;
}

module.exports = function bracketsFile(opts, done) {
    mergeFile({
        source: path.resolve(__base, 'fixtures/editorconfig'),
        dest: path.resolve('.', '.editorconfig'),
        data: {
            spaces: getSpaces(opts)
        },
        argv: opts,
        mergeFunction: merge
    }, done);
};
