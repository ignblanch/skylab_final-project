/* global angular */

angular.module('movTv')
  .controller('DetailController', function ($scope, $http, $routeParams, MediaService, FavoritesService, CommentsService) {
    $scope.imdbID = $routeParams.imdbID
    $scope.user = 'defaultUser'
    getFavorite()

    MediaService.searchDetail($scope.imdbID)
    .then(function (response) {
      $scope.media = response.data
      console.log($scope.media)
      $scope.title = $scope.media.Title
      $scope.imdbId = $scope.media.imdbID
      $scope.posterUrl = $scope.media.Poster
      $scope.type = $scope.media.Type
    })

    function addFavorite (stars) {
      $scope.stars = stars
      $scope.isFavorite = true
      FavoritesService.addFavorite($scope.user, $scope.imdbID, $scope.stars)
      .then((response) => console.log(response))
    }

    function removeFavorite () {
      $scope.isFavorite = false
      FavoritesService.removeFavorite($scope.user, $scope.imdbID)
      .then((response) => console.log(response))
    }

    function getFavorite () {
      FavoritesService.getFavorite($scope.user, $scope.imdbID)
      .then(function (response) {
        console.log(response.data)
        if (response.data) {
          $scope.isFavorite = true
          $scope.stars = response.data.stars
        } else {
          $scope.isFavorite = false
          $scope.stars = ''
        }
      })
    }

    CommentsService.getCommentsByFilm($scope.imdbID)
    .then(function (response) {
      $scope.Comments = response.data
      console.log($scope.Comments)
    })

    $scope.addFavorite = addFavorite
    $scope.removeFavorite = removeFavorite
    $scope.getFavorite = getFavorite
  })
