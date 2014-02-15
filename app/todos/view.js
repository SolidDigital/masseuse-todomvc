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
        var model;
        if(13 == $event.which) {
            model = this.decorateWithAttributes(this.model.clone());
            if (model) {
                this.collection.add(model);
                model.save();
                this.model.set('title','');
            }
        }
    }

    // Generate the attributes for a new Todo item.
    function decorateWithAttributes(model) {
        var title = this.model.get('title').trim();
        if (title) {
            model.set({
                title: title,
                order: TodosCollection.nextOrder()
            });
            return model;
        } else {
            return undefined;
        }
    }
});