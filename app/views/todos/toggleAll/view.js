define(['masseuse', 'todos/toggleAll/options'],
    function(masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options
    });
});