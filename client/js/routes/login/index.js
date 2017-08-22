/* global angular */

angular.module('skylab_final')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'js/routes/login/template.html',
        controller: 'LoginController'
      })
  })
