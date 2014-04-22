/*globals module:true */
module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('server', ['jshint', 'connect:site', 'watch:site']);
};
