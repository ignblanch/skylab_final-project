/* global angular */

angular.module('movTv')
  .controller('DetailController', function ($scope, $http, $routeParams, MediaService) {
    $scope.imdbID = $routeParams.imdbID

    MediaService.searchDetail($scope.imdbID)
    .then(function (response) {
      $scope.media = response.data
      console.log($scope.media)
    })
  })
