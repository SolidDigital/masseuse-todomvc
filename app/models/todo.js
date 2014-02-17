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
        this.dom = {};
        this.listenTo(channels, 'filter', this.setVisibility);
        this.on('change:completed change:title', function() {
            this.save();
        });
    }

    function close() {
        this.dom.editing = false;
        this.dom.autofocus = undefined;
        this.save();
    }

    function editing() {
        console.log(arguments);
        this.dom.editing = true;
        this.dom.autofocus = 'autofocus';
    }

    function setVisibility(filter) {
        var isCompleted = this.get('completed');
        this.dom.isHidden = (!isCompleted && filter === 'completed') ||
            (isCompleted && filter === 'active');
        this.dom.filter = filter;
    }
});
