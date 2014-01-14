/*global define*/

define([
    'underscore',
    'backbone',
    'parse',
    'models/Todo'
], function(_, Backbone, Parse, Todo) {
    'use strict';

    var TodolistCollection = Parse.Collection.extend({
        // Reference to this collection's model.
        model: Todo,

        // Filter down the list of all todo items that are finished.
        done: function() {
            return this.filter(function(todo) {
                return todo.get('done');
            });
        },

        // Filter down the list to only todo items that are still not finished.
        remaining: function() {
            return this.without.apply(this, this.done());
        },

        // We keep the Todos in sequential order, despite being saved by unordered
        // GUID in the database. This generates the next order number for new items.
        nextOrder: function() {
            if (!this.length) return 1;
            return this.last().get('order') + 1;
        },

        // Todos are sorted by their original insertion order.
        comparator: function(todo) {
            return todo.get('order');
        }
    });

    return TodolistCollection;
});
