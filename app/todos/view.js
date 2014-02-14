define(['masseuse', 'todos/options', 'todos/collection'], function(masseuse, options, TodosCollection) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        beforeRender : beforeRender
    });

    function beforeRender() {
        this.collection = TodosCollection;
    }
});