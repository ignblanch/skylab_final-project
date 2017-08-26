/* global angular */

angular.module('movTv')
  .controller('ProfileController', function ($scope, $http) {
    $scope.tv = true
    $scope.movies=true
  })
