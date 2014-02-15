/*globals module:true */
module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('deploy', ['copy:app', 'build_gh_pages:gh-pages']);
};
