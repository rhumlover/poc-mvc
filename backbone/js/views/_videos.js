define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/_videos.html',
    'common'
], function( $, _, Backbone, videosTemplate, Common ) {

    var VideoListView = Backbone.View.extend({

        // tagName:  'ul',

        template: _.template( videosTemplate ),

        events: {
            'click li': 'onItemClick'
        },

        initialize: function( videos, targetElement ) {
            this.$el = targetElement;
            this.collection = videos;

            var self = this;
            this.collection.on('fetched', function(page) {
                self.render(page);
            });

            this.itemCounter = 0;
        },

        render: function(page) {
            var self = this,
                tmpl = _.template( videosTemplate ),
                itemJson,
                finalStr = [];

            var pageItems = this.collection.where({page: page});

            _.each(pageItems, function(item) {
                itemJson = item.toJSON();
                itemJson.cid = item.cid;
                itemJson.f_duration = item.formatDuration();
                itemJson.f_views_total = item.formatTotalViews();
                itemJson.i = ++self.itemCounter;
                finalStr.push( tmpl(itemJson) );
            });

            var container = document.createElement('ul');
            container.innerHTML = finalStr.join("\n");
            this.$el.append( container );
        },

        onItemClick: function(e) {
            // console.log(this.collection);
            console.log(e.currentTarget.getAttribute('i'));
            App.router.navigate('video/' + e.currentTarget.getAttribute('id'), {trigger: true});
        }
    });

    return VideoListView;
});
