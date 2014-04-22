/*globals module:true*/
module.exports = function(grunt) {
    'use strict';

    grunt.config('shell', {
        'testPhantom' : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : 'mocha-phantomjs tests/index.html'
        }
    });
};
