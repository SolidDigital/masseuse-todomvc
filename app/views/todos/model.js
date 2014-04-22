/*global define*/
define([
    'underscore',
    'masseuse'
], function (_, masseuse) {
    'use strict';

    var fromServer = function() {
        return {
            title: '',
            completed: false
        };
    };

    return masseuse.Model.extend({

        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: _.extend(fromServer(), {
            dom: null
        }),

        initialize : initialize,
        editing : editing,
        close : closeModel,
        setVisibility : setVisibility,
        toJSON : toJSON
    });

    function initialize() {
        var channels = new masseuse.utilities.channels();
        this.listenTo(channels, 'filter', this.setVisibility);
        this.on('change:completed change:title', function() {
            this.save();
        });
    }

    function closeModel() {
        this.set('dom.editing', false);
        this.set('dom.autofocus', undefined);
        this.save();
    }

    function editing() {
        this.set('dom.editing', true);
        this.set('dom.autofocus', 'autofocus');
    }

    function setVisibility(filter) {
        var isCompleted = this.get('completed');
        this.set('dom.isHidden', (!isCompleted && filter === 'completed') ||
            (isCompleted && filter === 'active'));
        this.set('dom.filter', filter);
    }

    function toJSON() {
        return _.pick(this.attributes, _.keys(fromServer()));
    }
});
