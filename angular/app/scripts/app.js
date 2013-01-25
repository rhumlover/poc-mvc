'use strict';

var angular2App = angular.module('angular2App', [])
    .config(['$routeProvider', function($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/video/:id', {
          templateUrl: 'views/video.html',
          controller: 'VideoCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);