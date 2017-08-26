/* global angular */

angular.module('movTv')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'js/routes/signup/template.html',
        controller: 'SignupController'
      })
  })
