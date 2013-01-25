define([
    'jquery',
    'underscore',
    'backbone',
    'common',
    'views/home',
    'views/video'
], function( $, _, Backbone, Common, HomeView, VideoView ) {

    var AppView = Backbone.View.extend({

        el: 'body',

        events: {
            'click header': 'gotoHome'
        },

        initialize: function initialize() {
            this.currentView = null;
            this.currentViewId = null;
        },

        render: function render() {
        },

        switchView: function switchView( viewId, args ) {
            var argStr = [].slice.call(arguments).join('-');

            if (this.currentViewId && this.currentViewId === argStr) return;
            this.currentViewId = argStr;

            if (this.currentView) this.currentView.hide();

            switch( viewId ) {
                case 'home':
                    if (!App.views.home)
                    {
                        App.views.home = new HomeView();
                    }
                    this.currentView = App.views.home;
                    break;

                case 'video':
                    if (!App.views.video)
                    {
                        App.views.video = new VideoView();
                    }
                    App.views.video.loadId(args);
                    this.currentView = App.views.video;
                    break;
            }

            this.currentView.show();
        },

        gotoHome: function() {
            App.router.navigate('/', { trigger: true });
        }
    });

    return new AppView();
});
