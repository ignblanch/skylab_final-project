/* global angular */

angular.module('movTv')
  .controller('ResultsController', function ($scope, $http, $routeParams, MediaService) {
    $scope.query = $routeParams.query

    MediaService.searchMedia($scope.query)
    .then(function (response) {
      $scope.mediaResults = response.data
      console.log($scope.mediaResults)
    })
  })
