/* global angular */

angular.module('movTv')
  .controller('WriteReviewController', function ($scope, $http, $window, $routeParams, MediaService, CommentsService) {
    $scope.imdbID = $routeParams.imdbID
    $scope.author = $routeParams.author
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
      console.log($scope.commentTitle)
      CommentsService.addComment($scope.author, $scope.commentTitle, $scope.stars, $scope.imdbID, $scope.body, $scope.spoiler)
      .then($window.location.href = `#!/detail/${$scope.imdbID}`)
    }

    $scope.postComment = postComment
  })
