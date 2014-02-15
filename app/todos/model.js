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
        toggle: toggle,
        save : save
    });

    return Todo;

    function toggle() {
        this.save({
            completed: !this.get('completed')
        });
    }

    function save() {
        var title = this.attributes.title.trim();
        console.log(arguments);
        if (title) {
            console.log('saving');
            console.log(this);
            Backbone.Model.prototype.save.call(this, {title : title});
        }
    }
});
