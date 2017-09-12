/* global angular */

angular.module('movTv')
  .factory('AuthService', function ($rootScope, $http, StorageService, jwtHelper) {
    function registerUser (user) {
      const url = `register`
      return $http.post(url, user)
      .then(res => res.data)
    }

    function isLoggedIn () {
      const token = StorageService.getToken()
      if (!token) return false
      return true
    }

    function setCredentials (token) {
      const tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.loggedUser = tokenPayload.username
    }

    function doLogin (username, password) {
      return $http.post('/login', {username, password})
        .then(res => res.data)
        .then(data => {
          StorageService.saveToken(data.token)
          setCredentials(data.token)
          return data.success
        })
        .catch(data => data.error)
    }

    function logout () {
      StorageService.removeToken()
      delete $rootScope.loggedUser
    }

    return { registerUser, doLogin, isLoggedIn, setCredentials, logout }
  })
