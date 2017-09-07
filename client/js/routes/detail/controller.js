/* global angular */

angular.module('movTv')
  .controller('DetailController', function ($scope, $window, $location, sweetAlert, $rootScope, toastr, AuthService, $routeParams, MediaService, FavoritesService, CommentsService) {
    $scope.imdbID = $routeParams.imdbID
    $scope.user = $rootScope.loggedUser
    getFavorite()
    loadCommentsByFilm()
    $scope.starsCount = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0}

    MediaService.searchDetail($scope.imdbID)
    .then(function (response) {
      $scope.media = response.data
      console.log($scope.media)
      $scope.imdbId = $scope.media.imdbID
    })

    function addFavorite (stars) {
      if (!AuthService.isLoggedIn()) {
        $scope.stars = 0
        sweetAlert.swal({
          title: 'Please Login',
          text: 'You need an account to do this',
          type: 'error',
          showCancelButton: true,
          confirmButtonColor: '#0CE3AC',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go to Login/signup',
          cancelButtonText: 'Cancel'
        }).then(function () {
          $window.location.href = '#!/login'
        }, function (dismiss) {
          console.log('cancelled')
        })
      } else {
        $scope.stars = stars || 0
        $scope.isFavorite = true
        FavoritesService.addFavorite($scope.user, $scope.imdbID, $scope.stars)
        .then((response) => console.log(response))
      }
    }

    function removeFavorite () {
      sweetAlert.swal({
        title: 'Delete FAvorite',
        text: 'Are you sure you want to delete this from your collection?',
        type: 'error',
        showCancelButton: true,
        confirmButtonColor: '#0CE3AC',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
      }).then(function () {
        $scope.isFavorite = false
        FavoritesService.removeFavorite($scope.user, $scope.imdbID)
          .then((response) => console.log(response))
      }, function (dismiss) {
        console.log('cancelled')
      })
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
        sweetAlert.swal({
          title: 'Please Login',
          text: 'You need an account to do this',
          type: 'error',
          showCancelButton: true,
          confirmButtonColor: '#0CE3AC',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go to Login/signup',
          cancelButtonText: 'Cancel'
        }).then(function () {
          $window.location.href = '#!/login'
        }, function (dismiss) {
          console.log('cancelled')
        })
      } else {
        CommentsService.markCommentSpoiler(commentId)
        .then(loadCommentsByFilm())
        // .then($window.location.reload())
      }
    }

    function writeReview () {
      if (!AuthService.isLoggedIn()) {
        sweetAlert.swal({
          title: 'Please Login',
          text: 'You need an account to do this',
          type: 'error',
          showCancelButton: true,
          confirmButtonColor: '#0CE3AC',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go to Login/signup',
          cancelButtonText: 'Cancel'
        }).then(function () {
          $window.location.href = '#!/login'
        }, function (dismiss) {
          console.log('cancelled')
        })
      } else {
        $location.path(`/review/${$scope.imdbID}/${$scope.user}`)
      }
    }

    function seeProfile (author) {
      if (!AuthService.isLoggedIn()) {
        sweetAlert.swal({
          title: 'Please Login',
          text: 'You need an account to do this',
          type: 'error',
          showCancelButton: true,
          confirmButtonColor: '#0CE3AC',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go to Login/signup',
          cancelButtonText: 'Cancel'
        }).then(function () {
          $window.location.href = '#!/login'
        }, function (dismiss) {
          console.log('cancelled')
        })
      } else {
        $location.path(`/profile/${author}`)
      }
    }

    $scope.addFavorite = addFavorite
    $scope.removeFavorite = removeFavorite
    $scope.getFavorite = getFavorite
    $scope.markSpoiler = markSpoiler
    $scope.writeReview = writeReview
    $scope.seeProfile = seeProfile
  })
