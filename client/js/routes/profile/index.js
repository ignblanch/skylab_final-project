/* global angular */

angular.module('skylab_final')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile/:user', {
        templateUrl: 'js/routes/profile/template.html',
        controller: 'ProfileController'
      })
  })
