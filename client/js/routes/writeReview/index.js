/* global angular */

angular.module('movTv')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/review/:imdbID/:author', {
        templateUrl: 'js/routes/writeReview/template.html',
        controller: 'WriteReviewController',
        secure: true
      })
  })
