/* global angular */

angular.module('movTv')
  .controller('DetailController', function ($scope, $rootScope, toastr, AuthService, $routeParams, MediaService, FavoritesService, CommentsService) {
    $scope.imdbID = $routeParams.imdbID
    $scope.user = $rootScope.loggedUser
    getFavorite()
    loadCommentsByFilm()
    $scope.starsCount = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0}

    MediaService.searchDetail($scope.imdbID)
    .then(function (response) {
      $scope.media = response.data
      console.log($scope.media)
      // $scope.title = $scope.media.Title
      $scope.imdbId = $scope.media.imdbID
      // $scope.director = $scope.media.Director
      // $scope.posterUrl = $scope.media.Poster
      // $scope.type = $scope.media.Type
    })

    function addFavorite (stars) {
      if (!AuthService.isLoggedIn()) {
        return toastr.error('Sorry you need an account to use this feature!')
      }
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

    function loadCommentsByFilm () {
      CommentsService.getCommentsByFilm($scope.imdbID)
      .then(function (response) {
        $scope.Comments = response.data
        $scope.totalRatings = $scope.Comments.length
        $scope.Comments.forEach(function (comment) {
          switch (comment.stars) {
            case 5: $scope.starsCount[5]++; break
            case 4: $scope.starsCount[4]++; break
            case 3: $scope.starsCount[3]++; break
            case 2: $scope.starsCount[2]++; break
            case 1: $scope.starsCount[1]++
          }
        })
        console.log($scope.Comments)
      })
    }

    function markSpoiler (commentId) {
      if (!AuthService.isLoggedIn()) {
        return toastr.error('Sorry you need an account to use this feature!')
      } else {
        CommentsService.markCommentSpoiler(commentId)
        .then(loadCommentsByFilm())
      }
    }

    $scope.addFavorite = addFavorite
    $scope.removeFavorite = removeFavorite
    $scope.getFavorite = getFavorite
    $scope.markSpoiler = markSpoiler
  })
