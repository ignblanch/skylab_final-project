/* global angular */

angular.module('movTv')
  .controller('ProfileController', function ($scope, sweetAlert, $rootScope, $routeParams, FavoritesService, CommentsService, MediaService) {
    $scope.user = $routeParams.user
    console.log($scope.users)
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
      if ($scope.user !== $rootScope.loggedUser) {
        sweetAlert.swal({
          type: 'error',
          text: `Sorry you can't edit another user's profile!`
        })
      } else {
        sweetAlert.swal({
          title: 'Delete FAvorite',
          text: 'Are you sure you want to delete this from your collection?',
          type: 'error',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel'
        }).then(function () {
          $scope.isFavorite = false
          FavoritesService.removeFavorite($scope.user, imdbID)
            .then(loadFavorites())
        }, function (dismiss) {
          console.log('cancelled')
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
          text: `Sorry you can't edit another user's profile!`
        })
      } else {
        console.log($scope.editFavId)
        FavoritesService.editStarsFav($scope.editFavId, newStars)
        .then(loadFavorites())
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
