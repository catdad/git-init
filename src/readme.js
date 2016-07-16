/* jshint node: true */
/* global __base */

var path = require('path');

var renderFile = require(path.posix.join(__base, 'util', 'render-file.js'));

module.exports = function bracketsFile(opts, done) {
    renderFile({
        source: path.resolve(__base, 'fixtures/README.md'),
        dest: path.resolve('.', 'README.md'),
        argv: opts
    }, done);
};
