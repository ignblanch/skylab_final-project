/* global angular */

angular.module('movTv')
  .controller('SignupController', function ($scope, AuthService) {
    function registerUser (user) {
      AuthService.registerUser(user)
        .then(function (response) {
          console.log(response)
        })
    }
    $scope.registerUser = registerUser
  })
