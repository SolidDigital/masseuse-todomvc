define(['masseuse', 'todos/todoView/options'],
    function(masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        initialize : initialize
    });

    function initialize() {
        console.log('init! ' + this.cid);
        masseuse.plugins.rivets.RivetsView.prototype.initialize.apply(this,arguments);
    }
});