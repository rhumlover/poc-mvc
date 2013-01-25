'use strict';

angular2App.factory('Common', function()
{
    return {
        fields_list: [
            'id',
            'title',
            'duration',
            'created_time',
            'owner_screenname',
            'thumbnail_medium_url',
            'views_total',
            'onair'
        ],

        fields_details: [
            'id',
            'title',
            'duration',
            'created_time',
            'owner_screenname',
            'thumbnail_medium_url',
            'views_total',
            'onair',
            'title',
            'created_time',
            'type',
            'owner.screenname',
            'owner.username',
            'owner.avatar_medium_url',
            'owner.videos_total',
            'description',
            'channel',
            'views_total',
            'ads'
        ],

        limit: 10
    };
});