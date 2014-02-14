/*globals mochaPhantomJS:false*/
(function () {
    'use strict';

// Require.js allows us to configure shortcut alias
    require.config({
        shim : {
            mocha : {
                exports : 'mocha'
            },
            sinon : {
                exports : 'sinon'
            },
            sinonSpy : {
                deps : ['sinonCall'],
                exports : 'sinonSpy'
            }
        },
        paths : {
            jquery : '../app/vendor/jquery/jquery',
            rivets : '../app/vendor/rivets/dist/rivets',
            backbone : '../app/vendor/backbone-amd/backbone',
            text : '../app/vendor/requirejs-text/text',
            mocha : '../app/vendor/mocha/mocha',
            chai : '../app/vendor/chai/chai',
            sinon : '../app/vendor/sinon/lib/sinon',
            sinonSpy : '../app/vendor/sinon/lib/sinon/spy',
            sinonChai : '../app/vendor/sinon-chai/lib/sinon-chai',
            sinonCall : '../app/vendor/sinon/lib/sinon/call'
        },
        packages : [
            {
                name : 'underscore',
                location : '../app/vendor/lodash-amd/underscore'
            },
            {
                name : 'masseuse',
                location : '../app'
            }
        ]
    });

    require([
        'mocha'
    ], function (mocha) {
        if (typeof mochaPhantomJS !== 'undefined') {
            mochaPhantomJS.run();
        } else {
            mocha.run();
        }
    });
}());
