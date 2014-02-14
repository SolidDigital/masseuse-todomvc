define(['masseuse', 'todos/options', 'todos/collection'], function(masseuse, options, TodosCollection) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        beforeRender : beforeRender,
        keypress : keypress
    });

    function beforeRender() {
        this.collection = TodosCollection;
    }

    function keypress($event) {
        if(13 == $event.which) {

        }
    }
});