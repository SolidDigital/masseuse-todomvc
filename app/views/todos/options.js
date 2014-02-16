define(['text!views/todos/template.html', 'views/todos/formatters'], function (template, formatters) {
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
        ],
        rivetsFormatters : [ formatters ]
    };
});