define([
    'jquery',
    'backbone',
    'views/app',
    'common'
], function( $, Backbone, AppView, Common ) {

    var Workspace = Backbone.Router.extend({

        routes: {
            'video/:id': 'getView_Video',
            '*route': 'defaultRoute'
        },

        defaultRoute: function() {
            console.log('Router: home');
            AppView.switchView('home');
        },

        getView_Video: function( id ) {
            console.log('Router: videoView for id:', id);
            AppView.switchView('video', id);
        }
    });

    return Workspace;
});
