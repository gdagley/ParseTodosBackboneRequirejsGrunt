/*global define*/

define([
    'parse'
], function(Parse) {
    'use strict';

    var instance;

    // This is the transient application state, not persisted on Parse
    var AppState = Parse.Object.extend('AppState', {
        defaults: {
            filter: 'all'
        }
    });

    AppState.getInstance = function() {
        if (!instance) {
            instance = new AppState();
        }
        return instance;
    };

    return AppState;
});
