/* global angular */

angular.module('movTv')
  .controller('WriteReviewController', function ($scope, sweetAlert,$rootScope, AuthService, toastr, $location, $window, $routeParams, MediaService, CommentsService) {
    $scope.imdbID = $routeParams.imdbID
    $scope.author = $rootScope.loggedUser
    $scope.body = ''
    $scope.commentTitle = ''
    $scope.stars = 0
    $scope.spoiler = false

    MediaService.searchDetail($scope.imdbID)
    .then(function (response) {
      console.log(response.data)
      $scope.media = response.data
      $scope.title = $scope.media.Title
      $scope.posterUrl = $scope.media.Poster
    })

    function postComment () {
      CommentsService.addComment($scope.author, $scope.commentTitle, $scope.stars, $scope.imdbID, $scope.body, $scope.spoiler)
      .then(
        sweetAlert.swal({
          type: 'success',
          title: 'Thanks!',
          text: `Review added`,
          showConfirmButton: false,
          timer: 2000
        }).then(
            function () {
              // do nothing
            }, function (dismiss) {
              if (dismiss === 'timer') {
                // do nothing
              }
            })
      )
      .then($window.location.href = `#!/detail/${$scope.imdbID}`)
    }

    $scope.postComment = postComment
  })
