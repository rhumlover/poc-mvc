'use strict';

angular2App.controller('MenuCtrl', function( $scope, Common, $location )
{
    $scope.navigate = function( view, args )
    {
        var path = [view];
        args && path.push( args );

        $location.path( '/' + path.join('/') );
    };
});
