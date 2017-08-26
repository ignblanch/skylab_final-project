/* global angular */

angular.module('movTv')
  .controller('SearchController', function ($scope, $http, $location) {
    $scope.query = ''

    $scope.getQuery = function () {
      console.log('button clicked!')
      var query = $scope.query
      console.log(query)
      $location.path('/results/' + query)
    }
  })
