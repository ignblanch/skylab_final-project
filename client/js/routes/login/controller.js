/* global angular */

angular.module('movTv')
  .controller('LoginController', function ($scope, AuthService, toastr, $rootScope, $location) {
    console.log('entered controller')
    function doLogin (e) {
      console.log('button clicked')
      e.preventDefault()
      AuthService.doLogin($scope.username, $scope.password)
        .then(success => {
          if (success) {
            toastr.success('succesfully logged')
            $location.path(`/profile/${$rootScope.loggedUser}`)
          } else {
            toastr.error('try again!')
          }
        })
    }

    $scope.doLogin = doLogin
  })
