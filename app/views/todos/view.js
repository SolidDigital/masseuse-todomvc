define(['masseuse', 'todos/options', 'todos/collection', 'todos/toggleAll/model'],
    function(masseuse, options, TodosCollection, ToggleAllModel) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        beforeRender : beforeRender,
        keypress : keypress,
        newAttributes : newAttributes,
        close : close,
        toggleAll : toggleAll,
        setFilter : setFilter
    });

    function setFilter(filter) {
        this.model.set('filter', filter);
    }

    function beforeRender() {
        this.channels = new masseuse.channels();
        this.listenTo(this.channels, 'filter', this.setFilter);
        this.collection = TodosCollection;
        this.collection.fetch();
        this.model.set('checkbox', new ToggleAllModel());
    }

    function keypress($event) {
        var title,
            todo;
        if(13 == $event.which) {
            title = this.model.get('input.title').trim();
            if (title) {
                this.model.set('input.title', '');
                console.log('creating new model');
                todo = this.collection.create(this.newAttributes(title));
                todo.setVisibility(this.model.get('filter'));
            }
        }
    }

    // Generate the attributes for a new Todo item.
    function newAttributes(title) {
        console.log('boom');
        return {
            title: title,
            order: TodosCollection.nextOrder(),
            completed: false
        };
    }

    function toggleAll() {
        var checked = this.model.get('checkbox.checked');
        this.collection.each(function(model) {
            model.save({
                completed: checked
            });
        });
    }
});