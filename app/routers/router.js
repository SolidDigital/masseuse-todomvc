/*global define*/
define([
    'jquery',
    'backbone',
    'masseuse'
], function ($, Backbone, masseuse) {
    'use strict';

    var TodoRouter = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },

        setFilter: function (param) {
            var channels = new masseuse.utilities.channels();
            // Trigger a collection filter event, causing hiding/unhiding
            // of the Todo view items
            channels.trigger('filter', param || 'all');
        }
    });

    return TodoRouter;
});
