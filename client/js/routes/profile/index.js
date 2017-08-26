/* global angular */

angular.module('movTv')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile/:user', {
        templateUrl: 'js/routes/profile/template.html',
        controller: 'ProfileController'
      })
  })
