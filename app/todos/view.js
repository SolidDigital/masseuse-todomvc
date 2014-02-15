define(['masseuse', 'todos/options', 'todos/collection'],
    function(masseuse, options, TodosCollection) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        beforeRender : beforeRender,
        keypress : keypress,
        decorateWithAttributes : decorateWithAttributes,
        close : close
    });

    function beforeRender() {
        this.collection = TodosCollection;
        this.collection.fetch();
        window.view = this;
    }

    function keypress($event) {
        if(13 == $event.which) {
            this.collection.add(
                this.decorateWithAttributes(
                    this.model.clone()));
            this.model.set('title','');
        }
    }

    // Generate the attributes for a new Todo item.
    function decorateWithAttributes(model) {
        model.set({
            title: this.model.get('title').trim(),
            order: TodosCollection.nextOrder()
        });
        return model;
    }
});