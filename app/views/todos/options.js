define(['text!todos/template.html', 'todos/formatters', 'todos/todo/view'], function (template, formatters, TodoView) {
    'use strict';

    return {
        prependTo : 'body',
        template : template,
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
        rivetsConfig : {
            instaUpdate : true,
            formatters : [ formatters ],
            childViewBinders : {
                'todo-list-view' : TodoView
            }
        }
    };
});