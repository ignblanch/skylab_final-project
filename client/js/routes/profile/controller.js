/* global angular */

angular.module('movTv')
  .controller('ProfileController', function ($scope, $http, $routeParams, FavoritesService, CommentsService, MediaService) {
    $scope.user = $routeParams.user
    $scope.FullFavorites = []

    FavoritesService.getFavoritesByUser($scope.user)
    .then(function (response) {
      $scope.favorites = response.data
      console.log($scope.favorites)
      $scope.favorites.forEach(favorite => MediaService.searchDetail(favorite.imdbID)
      .then(function (response) {
        $scope.FullFavorites.push(response.data)
      }))
      console.log($scope.FullFavorites)
    })
  })
