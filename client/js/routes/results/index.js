/* global angular */

angular.module('skylab_final')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results/:query', {
        templateUrl: 'js/routes/results/template.html',
        controller: 'ResultsController'
      })
  })
