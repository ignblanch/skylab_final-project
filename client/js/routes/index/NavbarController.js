/* global angular */

angular.module('movTv')
  .controller('NavbarController', function ($scope, AuthService, toastr, $rootScope, $location) {
    $scope.isLogged = AuthService.isLoggedIn()
    // console.log($scope.isLoggedIn)
    console.log($rootScope.loggedUser)

    function logout () {
      console.log('click')
      AuthService.logout()
      toastr.error('You have successfully logged out')
      $location.path('/')
    }

    $scope.logout = logout
  })
