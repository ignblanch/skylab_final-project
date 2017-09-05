/* global angular */

angular.module('movTv')
  .controller('LoginController', function ($scope, AuthService, sweetAlert, toastr, $rootScope, $location) {
    function doLogin (e) {
      console.log('button clicked')
      e.preventDefault()
      AuthService.doLogin($scope.username, $scope.password)
        .then(success => {
          if (success) {
            sweetAlert.swal('Login correct')
            $location.path(`/profile/${$rootScope.loggedUser}`)
          } else {
            console.log('login not ok')
            sweetAlert.swal({
              type: 'error',
              text: `Sorry wrong username or password!`
            })
          }
        })
    }

    $scope.doLogin = doLogin
  })
