'use strict';

angular2App.controller('VideoCtrl', function( $scope, $routeParams, $location, Common, Video )
{
    var options = {
        fields: Common.fields_details
    };

    DM.api('/video/' + $routeParams.id, options, function( data )
    {
        if ( 'error' in data )
        {
            console.error( 'Error while fetching DM API:', data.error );
            return;
        }

        console.log( data );
        var video = new Video( data );

        $scope.video = video;
        $scope.$apply();
    });
});
