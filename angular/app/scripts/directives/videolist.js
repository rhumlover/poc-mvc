'use strict';

angular2App.directive('dmVideolist', function( $timeout, $http, $templateCache, $compile, $location, Common, Video )
{
    return function( $scope, element, attrs ) {

        $scope.navigate = function( view, args )
        {
            var path = [view];
            args && path.push( args );

            $location.path('/' + path.join('/'));
        };

        function fetchDMApi( url )
        {
            DM.api(url, { fields: Common.fields_list, limit: 10, page: 1 }, function( data )
            {
                if ( 'error' in data )
                {
                    console.error( 'Error while fetching DM API:', data.error );
                    return;
                }

                if ( 'list' in data )
                {
                    var list = data.list,
                        i, ln, item,
                        results = [];

                    for (i = 0, ln = list.length; i < ln; i++)
                    {

                        item = new Video( list[i] );
                        results.push( item );
                    }

                    $scope.list = results;

                    var html = $templateCache.get('videolist');
                    // Inject it into the DOM before compiling
                    element.html(html);
                    // Compile / Bind the DOM
                    $compile(element.contents())($scope);
                    // We are outside the main angular scope, trigger the $scope to apply changes
                    $scope.$apply();
                }
            });
        }

        switch (attrs.dmVideolist)
        {
            case 'related':
                $scope.$watch('video', function()
                {
                    if ($scope.video)
                    {
                        fetchDMApi( '/video/' + $scope.video.id + '/related' );
                    }
                });
                break;

            case 'last':
                fetchDMApi( '/videos?localization=detect&filters=buzz-premium' );
                break;
        }
    };
});
