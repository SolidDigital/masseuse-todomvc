define({
    'filter' : function(value, key) {
        'use strict';
        return value === key ? 'selected' : '';
    }
});