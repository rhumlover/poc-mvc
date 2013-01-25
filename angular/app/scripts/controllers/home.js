'use strict';

angular2App.controller('HomeCtrl', function( $scope, Video, Common )
{
    console.log(this);
});

angular2App.controller('LastVideosCtrl', function( $scope, Video, Common, $location, $timeout, $rootScope )
{
    var options = {
        fields: Common.fields_list,
        limit: Common.limit,
        page: 1
    };

    $scope.navigate = function( view, args )
    {
        var path = [view];
        args && path.push( args );

        $location.path('/' + path.join('/'));
    };
});