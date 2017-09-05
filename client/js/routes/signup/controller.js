/* global angular */

angular.module('movTv')
  .controller('SignupController', function ($scope, sweetAlert, AuthService, $location) {
    function registerUser (user) {
      AuthService.registerUser(user)
        .then(function (data) {
          if (data.success) {
            sweetAlert.swal(data.msg)
            $location.path('/login')
          } else {
            sweetAlert.swal({
              type: 'error',
              text: `${data.msg}`
            })
          }
        })
    }
    $scope.registerUser = registerUser
  })
