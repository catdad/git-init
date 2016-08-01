/* jshint node: true */
/* global __base */

var path = require('path');
var _ = require('lodash');

var mergeFile = require(path.posix.join(__base, 'util', 'merge-file.js'));

var DEFAULT_LINTER = ['JSHint'];
var DEFAULT_SPACES = 4;

function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return _.uniq(objValue.concat(srcValue));
    }
}

function validateStr(str) {
    if (!str || typeof str !== 'string' || str.trim() === '') {
        return '{}';
    }

    return str;
}

function mergeJson(existing, source) {
    existing = validateStr(existing);
    source = validateStr(source);

    // let these throw, the merge helper will
    // catch errors and handle them correctly
    var eData = JSON.parse(existing);
    var sData = JSON.parse(source);

    var merged = _.mergeWith(sData, eData, customizer);

    return JSON.stringify(merged, undefined, 4) + '\n';
}

function getLinter(opts) {
    var linter = opts.linter;

    if (!linter) {
        linter = DEFAULT_LINTER;
    }

    if (!Array.isArray(linter)) {
        linter = [linter];
    }

    return JSON.stringify(linter);
}

function getSpaces(opts) {
    return (opts.spaces == +opts.spaces) ?
        opts.spaces :
        DEFAULT_SPACES;
}

module.exports = function bracketsFile(opts, done) {
    console.log(opts);
    mergeFile({
        source: path.resolve(__base, 'fixtures/brackets.json'),
        dest: path.resolve('.', '.brackets.json'),
        data: {
            linter: getLinter(opts),
            spaces: getSpaces(opts)
        },
        argv: opts,
        mergeFunction: mergeJson
    }, done);
};
