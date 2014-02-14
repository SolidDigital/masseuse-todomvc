/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.config('build_gh_pages', {
        gh_pages : {
            options : {
                build_branch : 'gh-pages',
                dist : 'build'
            }
        },
        production : {
            options : {
                build_branch : 'production',
                dist : 'build'
            }
        },
        staging : {
            options : {
                build_branch : 'production',
                dist : 'build'
            }
        }
    });
};