/* global angular */

angular.module('skylab_final')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/home/template.html',
        controller: 'SearchController'
      })
  })
