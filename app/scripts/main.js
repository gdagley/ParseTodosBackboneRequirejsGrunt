/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        parse: {
            deps: ['jquery', 'underscore'],
            exports: 'Parse'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        parse: 'http://www.parsecdn.com/js/parse-1.2.16.min'
    }
});

require(['parse'], function(Parse) {
    Parse.initialize('your-application-id', 'your-javascript-key');
});

require([
    'backbone',
    'routes/AppRouter',
    'views/App'
], function(Backbone, AppRouter, AppView) {
    Backbone.history.start();

    new AppRouter();
    new AppView();
});
