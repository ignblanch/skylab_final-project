/* global angular */

angular.module('movTv')
  .controller('SignupController', function ($scope, AuthService, toastr, $location) {
    function registerUser (user) {
      AuthService.registerUser(user)
        .then(function (data) {
          if (data.success) {
            toastr.success(data.msg)
            $location.path('/login')
          } else {
            toastr.error(data.msg)
          }
        })
    }
    $scope.registerUser = registerUser
  })
