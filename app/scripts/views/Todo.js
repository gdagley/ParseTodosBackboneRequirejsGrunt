/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function($, _, Backbone, JST) {
    'use strict';

    var TodoView = Backbone.View.extend({
        template: JST['app/scripts/templates/Todo.ejs'],

        //... is a list tag.
        tagName: 'li',

        // The DOM events specific to an item.
        events: {
            'click .toggle': 'toggleDone',
            'dblclick label.todo-content': 'edit',
            'click .todo-destroy': 'clear',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close'
        },

        // The TodoView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a Todo and a TodoView in this
        // app, we set a direct reference on the model for convenience.
        initialize: function() {
            _.bindAll(this, 'render', 'close', 'remove');
            this.model.bind('change', this.render);
            this.model.bind('destroy', this.remove);
        },

        // Re-render the contents of the todo item.
        render: function() {
            $(this.el).html(this.template(this.model.toJSON()));
            this.input = this.$('.edit');
            return this;
        },

        // Toggle the `'done'` state of the model.
        toggleDone: function() {
            this.model.toggle();
        },

        // Switch this view into `'editing'` mode, displaying the input field.
        edit: function() {
            $(this.el).addClass('editing');
            this.input.focus();
        },

        // Close the `'editing'` mode, saving changes to the todo.
        close: function() {
            this.model.save({
                content: this.input.val()
            });
            $(this.el).removeClass('editing');
        },

        // If you hit `enter`, we're through editing the item.
        updateOnEnter: function(e) {
            if (e.keyCode === 13) {
                this.close();
            }
        },

        // Remove the item, destroy the model.
        clear: function() {
            this.model.destroy();
        }
    });

    return TodoView;
});
