/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Todo = Backbone.Model.extend({
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            title: '',
            completed: false
        },

        // Toggle the `completed` state of this todo item.
        toggle: toggle
    });

    return Todo;

    function toggle() {
        console.log('completed is: ' + this.get('completed'));
        this.save({
            completed: !this.get('completed')
        });
    }
});
