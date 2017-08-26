/* global angular */

angular.module('movTv')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/detail/:imdbID', {
        templateUrl: 'js/routes/detail/template.html',
        controller: 'DetailController'
      })
  })
