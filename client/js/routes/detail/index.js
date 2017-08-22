/* global angular */

angular.module('skylab_final')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/detail/:movie', {
        templateUrl: 'js/routes/detail/template.html',
        controller: 'DetailController'
      })
  })
