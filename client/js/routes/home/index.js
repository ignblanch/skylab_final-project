/* global angular */

angular.module('movTv')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/home/template.html',
        controller: 'SearchController'
      })
  })
