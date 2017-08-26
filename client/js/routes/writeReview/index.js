/* global angular */

angular.module('movTv')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/review/:movie', {
        templateUrl: 'js/routes/writeReview/template.html',
        controller: 'WriteReviewController'
      })
  })
