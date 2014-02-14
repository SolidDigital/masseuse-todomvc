define(['text!todos/template.html'], function (template) {
    'use strict';

    return {
        prependTo : 'body',
        template : template,
        rivetsInstaUpdate : true
    };
});