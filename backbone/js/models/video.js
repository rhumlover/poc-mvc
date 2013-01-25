define([
    'underscore',
    'backbone',
    'common',
    'models/user'
], function( _, Backbone, Common, UserModel ) {

    var VideoModel = Backbone.Model.extend({

        defaults:
        {
            title: '',
            duration: 0
        },

        fetch: function( id, fields ) {
            var self = this,
                catalog = App.Catalog;

            DM.api('/video/' + id, {fields: fields}, function( item )
            {
                if (!('error' in item))
                {
                    console.log(item);
                    self.parseData( item );
                    catalog.add( self );
                }

                self.trigger('fetched');
            });
        },

        parseData: function( data ) {
            var key, value, owner;

            // if (!this.get('owner'))
            // {
            //     owner = new UserModel();
            // }
            // else
            // {
            //     owner = this.get('owner');
            // }

            for (key in data)
            {
                value = data[key];
                var regex = /owner(\.|_)/;
                if (regex.test(key))
                {
                    key = key.replace(regex, 'owner_');
                    // owner.set(key, value);
                }
                // else
                // {
                // }

                this.set(key, value);
            }

            // this.set('owner', owner);

            // console.log(this);
        },

        formatDuration: function() {
            var duration = this.get('duration');

            if (duration) {
                var a = duration / 60,
                    b = a >> 0,
                    c = Math.round( 60 * (a - b) );

                if (b < 10) b = '0' + b;
                if (c < 10) c = '0' + c;

                return b + ':' + c;
            }

            return '00:00';
        },

        formatTotalViews: function() {
            var totalViews = this.get('views_total');

            if (totalViews)
            {
                return parseInt(totalViews, 10).toLocaleString().replace(/\s/g, ',');
            }

            return '0';
        }

    });

    return VideoModel;
});
