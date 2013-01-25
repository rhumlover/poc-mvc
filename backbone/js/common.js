define([], function() {
    return {
        fields: [
            'id',
            'title',
            'duration',
            'created_time',
            'owner.screenname',
            // 'owner.username',
            'thumbnail_medium_url',
            'views_total',
            // 'available_formats',
            'onair'
            // 'description',

            // 'type',
            // 'owner.avatar_medium_url',
            // 'owner.videos_total',
            // 'channel',
            // 'ads'
        ],

        fieldsFull: [
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

        limit: 10,

        mainElement: 'app',

        // What is the enter key constant?
        ENTER_KEY: 13
    };
});
