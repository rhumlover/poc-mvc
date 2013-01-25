// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
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
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        },
        backboneMarionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        }
    },
    paths: {
        jquery: '../vendor/jquery-1.9.0.min',
        underscore: '../vendor/lodash.underscore.min',
        backbone: 'lib/backbone/backbone',
        backboneLocalstorage: 'lib/backbone/backbone.localStorage',
        backboneMarionette: 'lib/backbone/backbone.marionette',
        text: 'lib/require/text',
        DMApi: 'http://api.dmcdn.net/all'
    }
});

require([
    'views/app',
    'routers/router',
    'DMApi',
    'collections/catalog'
], function( AppView, Workspace, DMApi, Catalog ) {

    this.App = {
        router: null,
        views: {},
        models: {},
        collections: {}
    };
    App.Catalog = new Catalog();

    // Initialize routing and start Backbone.history()
    App.router = new Workspace();
    Backbone.history.start();
});
