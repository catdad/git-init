/* jshint node: true */

var path = require('path');

var async = require('async');

global.__base = path.resolve(__dirname);

module.exports = function index(opts, done) {
    var list = [
        require('./src/init.js'),
//        require('./src/npm-init.js'),
        require('./src/brackets.js'),
        require('./src/editorconfig.js'),
        require('./src/gitignore.js'),
        require('./src/gitattributes.js'),
        require('./src/readme.js'),
    ].map(function(mod) {
        return function callModule(next) {
            return mod(opts, next);
        };
    });

    async.series(list, done);
};
