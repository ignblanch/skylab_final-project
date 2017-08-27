/* global angular */

angular.module('movTv')
  .controller('DetailController', function ($scope, $http, $routeParams, MediaService, FavoritesService) {
    $scope.imdbID = $routeParams.imdbID
    $scope.stars = 'N/A'

    MediaService.searchDetail($scope.imdbID)
    .then(function (response) {
      $scope.media = response.data
      console.log($scope.media)
      $scope.title = $scope.media.Title
      $scope.imdbId = $scope.media.imdbID
      $scope.posterUrl = $scope.media.Poster
    })

    function addFavorite (stars) {
      $scope.stars = stars
      console.log(`${$scope.title}, ${$scope.imdbID}, ${$scope.posterUrl}, ${$scope.stars}`)
      FavoritesService.addFavorite($scope.title, $scope.imdbID, $scope.posterUrl, $scope.stars)
      .then((response) => console.log(response))
    }
    $scope.addFavorite = addFavorite
  })
