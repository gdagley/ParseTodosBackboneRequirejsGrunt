/*global define*/

define([
    'underscore',
    'backbone',
    'parse'
], function(_, Backbone, Parse) {
    'use strict';

    var TodoModel = Parse.Object.extend('Todo', {
        // Default attributes for the todo.
        defaults: {
            content: 'empty todo...',
            done: false
        },

        // Ensure that each todo created has `content`.
        initialize: function() {
            if (!this.get('content')) {
                this.set({
                    'content': this.defaults.content
                });
            }
        },

        // Toggle the `done` state of this todo item.
        toggle: function() {
            this.save({
                done: !this.get('done')
            });
        }
    });

    return TodoModel;
});
