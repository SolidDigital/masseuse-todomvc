define(['text!todos/template.html', 'todos/model'], function (template, TodosModel) {
    'use strict';

    return {
        prependTo : 'body',
        template : template,
        rivetsInstaUpdate : true,
        ModelType : TodosModel
    };
});