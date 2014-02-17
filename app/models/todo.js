/*global define*/
define([
    'underscore',
    'backbone',
    'masseuse'
], function (_, Backbone, masseuse) {
    'use strict';

    return Backbone.Model.extend({

        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            title: '',
            completed: false
        },

        initialize : initialize,
        editing : editing,
        close : close,
        setVisibility : setVisibility
    });

    function initialize() {
        var channels = new masseuse.utilities.channels();
        this.listenTo(channels, 'filter', this.setVisibility);
        this.on('change:completed change:title', function() {
            this.save();
        });
    }

    function close() {
        this.set('editing', false);
        this.unset('autofocus');
        this.save();
    }

    function editing() {
        console.log('editing');
        this.set('editing', true);
        this.set('autofocus', true);
    }

    function setVisibility(filter) {
        var isCompleted = this.get('completed'),
            isHidden = (!isCompleted && filter === 'completed') ||
                (isCompleted && filter === 'active');
        this.set('isHidden', isHidden);
        this.set('filter',filter);
    }
});
