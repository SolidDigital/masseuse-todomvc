define(['masseuse', 'views/todos/options', 'collections/todos'],
    function(masseuse, options, TodosCollection) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        checkbox : new masseuse.MasseuseModel(),
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
        this.channels = new masseuse.utilities.channels();
        this.listenTo(this.channels, 'filter', this.setFilter);
        this.collection = TodosCollection;
        this.collection.fetch();
    }

    function keypress($event) {
        var title,
            todo;
        if(13 == $event.which) {
            title = this.model.get('input.title').trim();
            if (title) {
                this.model.set('input.title', '');
                todo = this.collection.create(this.newAttributes(title));
                todo.setVisibility(this.model.get('filter'));
            }
        }
    }

    // Generate the attributes for a new Todo item.
    function newAttributes(title) {
        return {
            title: title,
            order: TodosCollection.nextOrder(),
            completed: false
        };
    }

    function toggleAll(model, checkbox) {
        var checked = checkbox.checked;
        this.collection.each(function(model) {
            model.save({
                completed: checked
            });
        });
    }
});