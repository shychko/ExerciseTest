'use strict';

/* App Module */

var exerciseApp = angular.module('exerciseApp', [
    'ngRoute',     
    'exerciseControllers',
    'ngResource'
]);

exerciseApp.directive('groceryWidget', [function() {
    return {
        templateUrl: 'partials/wares.html',
        restrict: 'AE',
        link: function($scope, $element, $attrs) {
            $scope.getSale = function (item) {
                return Math.ceil((
                    (item.price - item.previous) / item.previous) * 100);
            };
        }
    };
}]);

exerciseApp.config(['$provide', '$routeProvider', '$locationProvider',
    function ($provide, $routeProvider, $locationProvider) {
        $provide.value("startTime", new Date());
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'MainCtrl'
                }).when('/e3', {
                    templateUrl: 'partials/grocery.html'
                }).otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(false).hashPrefix('!');

    }])
    .run(function ($rootScope, startTime){
        $rootScope.endPoint = 'http://api.openweathermap.org/data/2.5/weather?'
        startTime.setTime((new Date()).getTime());
  });;



