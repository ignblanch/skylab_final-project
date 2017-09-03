/* global angular */

angular.module('movTv')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'js/routes/login/template.html',
        controller: 'LoginController'
      })
  })
