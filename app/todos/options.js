define(['text!todos/template.html'], function (template) {
    'use strict';

    return {
        prependTo : 'body',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {
            input : {
                title : ''
            },
            checkbox : {
                checked : false
            }
        },
        listeners : [
            [
                'model', 'change:checkbox', 'toggleAll'
            ]
        ]
    };
});