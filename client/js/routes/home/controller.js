/* global angular */

angular.module('movTv')
  .controller('SearchController', function ($scope, $location) {
    $scope.query = ''

    $scope.getQuery = function () {
      var query = $scope.query
      console.log(query)
      $location.path('/results/' + query)
    }
  })
