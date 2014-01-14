/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'parse',
    'views/ManageTodos',
    'views/Login'
], function ($, _, Backbone, Parse, ManageTodosView, LogInView) {
    'use strict';

    var AppView = Backbone.View.extend({
        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#faithgroup-admin',

        initialize: function() {
            this.render();
        },

        render: function() {
            if (Parse.User.current()) {
                new ManageTodosView();
            } else {
                new LogInView();
            }
        }
    });

    return AppView;
});
