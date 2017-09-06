/* global angular */

angular.module('movTv')
  .controller('ProfileController', function ($scope, $window, sweetAlert, $rootScope, $routeParams, FavoritesService, CommentsService, MediaService) {
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
        $scope.favorites.forEach(favorite => MediaService.searchDetail(favorite.imdbID)
        .then(function (response) {
          response.data.stars = favorite.stars
          console.log(response.data.stars)
          response.data.favId = favorite._id
          $scope.FullFavorites.push(response.data)
        }))
      })
    }

    function removeFavorite (imdbID) {
      if ($scope.user !== $rootScope.loggedUser) {
        sweetAlert.swal({
          type: 'error',
          text: `Sorry you can't edit another user's collection!`
        })
      } else {
        sweetAlert.swal({
          title: 'Delete',
          text: 'Are you sure you want to delete this from your collection?',
          type: 'error',
          showCancelButton: true,
          confirmButtonColor: '#0CE3AC',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel'
        }).then(function () {
          $scope.isFavorite = false
          FavoritesService.removeFavorite($scope.user, imdbID)
            .then(loadFavorites())
        }, function (dismiss) {
          // do nothing
        })
      }
    }

    function setEditFavId (favId) {
      $scope.editFavId = favId
    }

    function editStarsFav (newStars) {
      if ($scope.user !== $rootScope.loggedUser) {
        sweetAlert.swal({
          type: 'error',
          text: `Sorry you can't edit another user's collection!`
        })
      } else {
        FavoritesService.editStarsFav($scope.editFavId, newStars)
          .then($window.location.reload())
      }
    }

    function loadComments () {
      CommentsService.getCommentsByAuthor($scope.user)
      .then(function (response) {
        $scope.Comments = response.data
        $scope.Comments.forEach(comment => MediaService.searchDetail(comment.imdbID)
          .then(function (response) {
            comment.movieTitle = response.data.Title
          }))
      })
    }

    function removeComment (commentId) {
      if ($scope.user !== $rootScope.loggedUser) {
        sweetAlert.swal({
          type: 'error',
          text: `Sorry you can't edit another user's collection!`
        })
      } else {
        CommentsService.removeComment(commentId)
        .then(loadComments())
      }
    }

    $scope.removeFavorite = removeFavorite
    $scope.removeComment = removeComment
    $scope.editStarsFav = editStarsFav
    $scope.setEditFavId = setEditFavId
  })
