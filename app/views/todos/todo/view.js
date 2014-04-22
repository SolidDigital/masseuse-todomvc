define(['masseuse', 'todos/todo/options'],
    function(masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        beforeRender : beforeRender,
        defaultOptions :  options
    });

    function beforeRender() {
    }
});