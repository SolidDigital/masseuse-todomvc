define(['text!todos/template.html', 'todos/formatters', 'todos/todoView/view', 'todos/toggleAll/view'],
    function (template, formatters, TodoView, ToggleAllView) {
    'use strict';

    return {
        prependTo : 'body',
        template : template,
        modelData : {
            input : {
                title : ''
            }
        },
        listeners : [
            [
                'model', 'change', 'toggleAll'
            ]
        ],
        rivetsConfig : {
            instaUpdate : true,
            formatters : [ formatters ],
            childViewBinders : {
                'todo-view' : TodoView,
                'toggle-all-view' : ToggleAllView
            }
        }
    };
});