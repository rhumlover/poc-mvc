'use strict';

angular2App.directive('dmPlayer', function( $timeout )
{
    return function(scope, element, attrs ) {

        scope.$watch('video', function( newValue, oldValue )
        {
            if (scope.video && scope.video.id)
            {
                var _w = window.innerWidth,
                    _h = (_w * 9) / 16;

                var player = DM.player(element.context,
                {
                    video: scope.video.id,
                    width: _w,
                    height: _h,
                    params: {
                        html: false,
                        info: false,
                        autoplay: false,
                        fullscreen: 'auto'
                    }
                });
            }
        });
    };
});
