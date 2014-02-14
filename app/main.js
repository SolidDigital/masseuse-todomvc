(function () {
    'use strict';

    require.config({
        paths : {
            jquery : 'vendor/jquery/jquery',
            rivets : 'vendor/rivets/dist/rivets',
            backbone : 'vendor/backbone-amd/backbone',
            backboneLocalstorage: 'vendor/backbone.localStorage/backbone.localStorage',
            text : 'vendor/requirejs-text/text'
        },
        packages : [
            {
                name : 'underscore',
                location : 'vendor/lodash-amd/underscore'
            },
            {
                name : 'masseuse',
                location : 'vendor/masseuse/app'
            }
        ]
    });

    require([
        'todos/view'
    ], function (todos) {
        new todos().start();
    });
}());
