'use strict';

/* App Module */

angular.module('exerciseApp',[])
    .controller('TestController',['$scope',function($scope){
        $scope.list = ['alpha','beta','gamma'];
        $scope.add = function(item){
            $scope.list.push(item);
        };
        $scope.remove = function(item){
            $scope.list.pop(item);
        };
    }])
