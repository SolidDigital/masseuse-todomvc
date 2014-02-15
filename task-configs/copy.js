/*globals module:true */
module.exports = function (grunt) {
    'use strict';
    grunt.config('copy', {
        app : {
            files : [
                {
                    expand : true,
                    cwd : 'app/',
                    src : [
                        '**'
                    ],
                    dest : 'build/app/'
                }
            ]
        }
    });
};