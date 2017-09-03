/* global angular */

angular.module('movTv')
  .controller('ProfileController', function ($scope, $routeParams, FavoritesService, CommentsService, MediaService) {
    $scope.user = $routeParams.user
    loadFavorites()
    loadComments()
    $scope.editFavId = ''
    $scope.newStars = 0

    function loadFavorites () {
      $scope.FullFavorites = []
      FavoritesService.getFavoritesByUser($scope.user)
      .then(function (response) {
        $scope.favorites = response.data
        console.log($scope.favorites)
        $scope.favorites.forEach(favorite => MediaService.searchDetail(favorite.imdbID)
        .then(function (response) {
          response.data.stars = favorite.stars
          response.data.favId = favorite._id
          $scope.FullFavorites.push(response.data)
        }))
        console.log($scope.FullFavorites)
      })
    }

    function removeFavorite (imdbID) {
      FavoritesService.removeFavorite($scope.user, imdbID)
      .then(loadFavorites())
    }

    function setEditFavId (favId) {
      $scope.editFavId = favId
    }

    function editStarsFav (newStars) {
      console.log($scope.editFavId)
      FavoritesService.editStarsFav($scope.editFavId, newStars)
      .then(loadFavorites())
    }

    function loadComments () {
      CommentsService.getCommentsByAuthor($scope.user)
      .then(function (response) {
        $scope.Comments = response.data
        $scope.Comments.forEach(comment => MediaService.searchDetail(comment.imdbID)
          .then(function (response) {
            comment.movieTitle = response.data.Title
          }))
        console.log($scope.Comments)
      })
    }

    function removeComment (commentId) {
      CommentsService.removeComment(commentId)
        .then(loadComments())
    }

    $scope.removeFavorite = removeFavorite
    $scope.removeComment = removeComment
    $scope.editStarsFav = editStarsFav
    $scope.setEditFavId = setEditFavId
  })
