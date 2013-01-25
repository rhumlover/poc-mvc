define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'models/video',
    'common'
], function( _, Backbone, Store, Video, Common ) {

    var CatalogCollection = Backbone.Collection.extend({

        model: Video,

        localStorage: new Store('pocmvc-videos')

    });

    return CatalogCollection;
});
