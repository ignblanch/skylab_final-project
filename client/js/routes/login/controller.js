/* global angular */

angular.module('movTv')
  .controller('LoginController', function ($scope, AuthService, toastr, $rootScope, $location) {
    function doLogin (e) {
      console.log('button clicked')
      e.preventDefault()
      AuthService.doLogin($scope.username, $scope.password)
        .then(success => {
          if (success) {
            toastr.success('Succesfully logged')
            $location.path(`/profile/${$rootScope.loggedUser}`)
          } else {
            console.log('login not ok')
            toastr.error('Sorry wrong username or password!')
          }
        })
    }

    $scope.doLogin = doLogin
  })
