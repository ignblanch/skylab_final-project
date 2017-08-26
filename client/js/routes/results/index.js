/* global angular */

angular.module('movTv')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results/:query', {
        templateUrl: 'js/routes/results/template.html',
        controller: 'ResultsController'
      })
  })
