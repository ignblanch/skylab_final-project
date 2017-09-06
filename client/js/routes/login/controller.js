/* global angular */

angular.module('movTv')
  .controller('LoginController', function ($scope, AuthService, sweetAlert, toastr, $rootScope, $location) {
    function doLogin (e) {
      e.preventDefault()
      AuthService.doLogin($scope.username, $scope.password)
        .then(success => {
          if (success) {
            sweetAlert.swal({
              type: 'success',
              text: `Login correct`,
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
            $location.path(`/profile/${$rootScope.loggedUser}`)
          } else {
            console.log('login not ok')
            sweetAlert.swal({
              type: 'error',
              text: `Sorry wrong username or password!`,
              confirmButtonText: 'Try again'
            })
          }
        })
    }
    $scope.doLogin = doLogin
  })
