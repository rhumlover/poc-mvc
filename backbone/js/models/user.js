define([
    'underscore',
    'backbone',
    'common'
], function( _, Backbone, Common ) {

    var UserModel = Backbone.Model.extend({

        defaults:
        {
            title: '',
            duration: 0
        }

    });

    return UserModel;
});
