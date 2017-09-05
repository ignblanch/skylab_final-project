/* global angular */

angular.module('movTv', ['ngRoute', 'toastr', 'angular-jwt', '19degrees.ngSweetAlert2'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise('/login')
  })
  .run(function ($rootScope, $location, StorageService, toastr, AuthService) {
    if (AuthService.isLoggedIn()) {
      const token = StorageService.getToken()
      AuthService.setCredentials(token)
    }

    $rootScope.$on('$routeChangeStart', function (event, next, toastr, current) {
      console.log('route has changed')
      if (next && next.secure) {
        console.log('this route is secured!!')
        if (!AuthService.isLoggedIn()) {
          $location.path('/login')
        }
      }
    })
  })
