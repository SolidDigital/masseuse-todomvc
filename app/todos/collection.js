/*global define*/
define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'todos/model'
], function (_, Backbone, Store, Todo) {
    'use strict';

    var TodosCollection = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: Todo,

        initialize : function() {
            this.on('change add remove', this.remaining);
            this.on('change add remove', this.completed);
        },

        // Save all of the todo items under the `"todos"` namespace.
        localStorage: new Store('todos-backbone'),

        // Filter down the list of all todo items that are finished.
        completed: function () {
            this.done = this.getCompleted().length;
        },

        getCompleted : function () {
            return this.filter(function (todo) {
                return todo.get('completed');
            });
        },

        // Clear all completed todo items, destroying their models.
        clearCompleted: function () {
            _.invoke(this.getCompleted(), 'destroy');
            return false;
        },

        // Filter down the list to only todo items that are still not finished.
        remaining: function () {
            this.leftToDo = this.without.apply(this, this.completed()).length;
            this.items = 1 == this.leftToDo ? 'item' : 'items';
        },

        // We keep the Todos in sequential order, despite being saved by unordered
        // GUID in the database. This generates the next order number for new items.
        nextOrder: function () {
            if (!this.length) {
                return 1;
            }
            return this.last().get('order') + 1;
        },

        // Todos are sorted by their original insertion order.
        comparator: function (todo) {
            return todo.get('order');
        }
    });

    return new TodosCollection();
});
