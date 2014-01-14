/*global define*/

define([
    'jquery',
    'backbone',
    'parse',
    'models/AppState'
], function($, Backbone, Parse, AppState) {
    'use strict';

    var state = AppState.getInstance();

    var AppRouter = Parse.Router.extend({
        routes: {
            'all': 'all',
            'active': 'active',
            'completed': 'completed'
        },

        initialize: function(options) {},

        all: function() {
            state.set({
                filter: 'all'
            });
        },

        active: function() {
            state.set({
                filter: 'active'
            });
        },

        completed: function() {
            state.set({
                filter: 'completed'
            });
        }
    });

    return AppRouter;
});
