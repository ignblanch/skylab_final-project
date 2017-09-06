/* global angular */

angular.module('movTv')
  .controller('NavbarController', function ($scope, sweetAlert, AuthService, toastr, $rootScope, $location) {
    $scope.isLogged = AuthService.isLoggedIn()
    function logout () {
      AuthService.logout()
      sweetAlert.swal({
        type: 'error',
        text: `You have logged out correctly`,
        showConfirmButton: false,
        timer: 2000
      }).then(
      function () {
        // do nothing
      }, function (dismiss) {
        if (dismiss === 'timer') {
          // do nothing
        }
      })
      $location.path('/')
    }
    $scope.logout = logout
  })
