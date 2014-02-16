/*global define*/
define([
    'underscore',
    'backbone',
    'masseuse'
], function (_, Backbone, masseuse) {
    'use strict';

    var Todo = Backbone.Model.extend({

        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            title: '',
            completed: false
        },

        initialize : initialize,
        toggle: toggle,
        setVisibility : setVisibility
    });

    return Todo;

    function initialize() {
        var channels = new masseuse.utilities.channels();
        this.listenTo(channels, 'filter', this.setVisibility);
    }

    // Toggle the `completed` state of this todo item.
    function toggle() {
        console.log('completed is: ' + this.get('completed'));
        this.save({
            completed: !this.get('completed')
        });
    }

    function setVisibility(filter) {
        var isCompleted = this.get('completed'),
            isHidden = (!isCompleted && filter === 'completed') ||
                (isCompleted && filter === 'active');
        console.log(isHidden);
        this.set('isHidden', isHidden);
    }
});
