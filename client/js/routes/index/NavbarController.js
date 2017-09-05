/* global angular */

angular.module('movTv')
  .controller('NavbarController', function ($scope, sweetAlert, AuthService, toastr, $rootScope, $location) {
    $scope.isLogged = AuthService.isLoggedIn()
    // console.log($scope.isLoggedIn)
    console.log($rootScope.loggedUser)

    function logout () {
      console.log('click')
      AuthService.logout()
      sweetAlert.swal({
        type: 'error',
        text: `You have logged out correcly`
      })
      $location.path('/')
    }

    $scope.logout = logout
  })
