/*global define*/
define(['masseuse'], function (masseuse) {
    'use strict';


    return masseuse.Model.extend({

        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: defaults
    });

    function defaults() {
        return {
            checked : false
        };
    }
});
