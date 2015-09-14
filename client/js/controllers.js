'use strict';

/* Controllers */

var exerciseControllers = angular.module('exerciseControllers', []);


exerciseControllers.controller('MainCtrl', ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http) {
        $scope.message = "This is the HOME View";
    }]);



exerciseControllers.controller('VersionCtrl', function($scope, VersionService) {
    $scope.versions = VersionService.version;
})


exerciseControllers.controller('GroceryCtrl',
    function($scope, GroceryModel) {
        $scope.message = "List of Sale Items for this week.";
        $scope.groceryData = GroceryModel.getGroceries();
    });