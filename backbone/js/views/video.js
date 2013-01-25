define([
    'jquery',
    'underscore',
    'backbone',
    'common',
    'collections/videos',
    'views/_videos',
    'text!templates/video.html',
    'models/video'
], function( $, _, Backbone, Common, Videos, VideoListView, videoTemplate, VideoModel ) {

    var VideoView = Backbone.View.extend({

        // el: '#app',

        template: _.template( videoTemplate ),

        events: {
        },

        initialize: function() {
            var container = document.createElement( 'div' );
            container.className = 'page video';
            document.getElementById( Common.mainElement ).appendChild( container );

            this.el = container;
            this.$el = $(container);

            this.render();
        },

        render: function() {
            console.log('VideoView> render()');
            return this;
        },

        loadId: function( id ) {
            console.log('VideoView> load id %s', id);

            if (this.currentId && this.currentId === id) return;

            this.erase();
            this.currentId = id;

            var hasVideo = App.Catalog.where({ id: id }),
                self = this,
                variables = {},
                video;

            video = hasVideo.length ? hasVideo[0] : new VideoModel();

            video.on('fetched', function() {

                variables['f_duration'] = this.formatDuration();
                variables['f_views_total'] = this.formatTotalViews();
                self.el.innerHTML = self.template( this.toJSON(), variables );

                var _w = window.innerWidth,
                    _h = (_w * 9) / 16;

                // Player
                var player = DM.player(self.el.querySelector('.dmplayer'),
                {
                    video: id,
                    width: _w,
                    height: _h,
                    params: {
                        html: false,
                        info: false,
                        autoplay: false,
                        fullscreen: 'auto'
                    }
                });

                // Related
                var relatedCollection = new Videos(),
                    videosView = new VideoListView( relatedCollection, self.$el.find('.page-player-related') );

                relatedCollection.fetchRelated( id );
            });

            video.fetch( id, Common.fieldsFull );
        },

        erase: function() {
            console.log('VideoView> erase()');
            this.$el.html('');
        },

        show: function() {
            console.log('VideoView> show()');
            this.$el.show();
        },

        hide: function() {
            console.log('VideoView> hide()');
            this.$el.hide();
        }
    });

    return VideoView;
});
