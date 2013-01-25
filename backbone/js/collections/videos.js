define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'models/video',
    'common'
], function( _, Backbone, Store, VideoModel, Common ) {

    var VideosCollection = Backbone.Collection.extend({

        model: VideoModel,

        localStorage: new Store('pocmvc-videos'),

        fetch: function( request ) {
            console.log(DM);
        },

        fetchLast: function( page )
        {
            var self = this,
                param;

            page = page ? page : 1;
            param = {
                fields: Common.fields,
                page: page,
                limit: Common.limit
            };

            DM.api('/videos?localization=detect&filters=buzz-premium', param, function( items )
            {
                if ('list' in items)
                {
                    console.log(items.list);
                    self._addItems(items.list, page);
                }
            });
        },

        fetchRelated: function( id, page ) {
            var self = this,
                param;

            page = page ? page : 1;
            param = {
                fields: Common.fields,
                page: page,
                limit: Common.limit
            };

            DM.api('/video/' + id + '/related', param, function( items )
            {
                if ('list' in items)
                {
                    console.log(items.list);
                    self._addItems(items.list, page);
                }
            });
        },

        _addItems: function( items, page ) {
            var i, len, item, model,
                results = [];

            for (i = 0, len = items.length; i < len; i++)
            {
                item = items[i];
                model = new VideoModel();
                model.parseData( item );
                App.Catalog.add( model );

                model.set('page', page);
                this.add( model );
            }

            this.trigger('fetched', page);
        }

    });

    return VideosCollection;
});
