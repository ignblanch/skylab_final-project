/* global angular */

angular.module('skylab_final')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/review/:movie', {
        templateUrl: 'js/routes/writeReview/template.html',
        controller: 'WriteReviewController'
      })
  })
