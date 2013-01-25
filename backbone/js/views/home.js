define([
    'jquery',
    'underscore',
    'backbone',
    'collections/videos',
    'views/_videos',
    'text!templates/home.html',
    'common'
], function( $, _, Backbone, Videos, VideoListView, homeTemplate, Common ) {

    var HomeView = Backbone.View.extend({

        // el: '#app',

        template: _.template( homeTemplate ),

        events: {
        },

        initialize: function() {
            this.videoCollection = new Videos();

            var container = document.createElement( 'div' );
            container.className = 'page home';
            document.getElementById( Common.mainElement ).appendChild( container );

            this.el = container;
            this.$el = $(container);

            this.render();
        },

        render: function() {
            var videosView = new VideoListView( this.videoCollection, this.$el );
            this.videoCollection.fetchLast();

            // var self = this;
            // setTimeout(function(){
            //     self.videoCollection.fetchLast(2);
            // }, 1000);
            return this;
        },

        show: function() {
            console.log('HomeView> show()');
            this.$el.show();
        },

        hide: function() {
            console.log('HomeView> hide()');
            this.$el.hide();
        }
    });

    return HomeView;
});
