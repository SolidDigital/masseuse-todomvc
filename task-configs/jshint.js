/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.config('jshint', {
        files : [
            'app/**/*.js',
            'tests/**/*.js',
            '!app/vendor/**/*.js',
        ],
        options : {
            jshintrc : '.jshintrc'
        }
    });
};