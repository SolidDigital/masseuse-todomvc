/*global define*/
define([
    'jquery',
    'backbone',
    'masseuse'
], function ($, Backbone, masseuse) {
    'use strict';

    return Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },

        setFilter: setFilter
    });

    function setFilter(param) {
        var channels = new masseuse.channels();
        // Trigger a collection filter event, causing hiding/unhiding
        // of the Todo view items
        channels.trigger('filter', param || 'all');
    }
});
