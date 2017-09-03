/* global angular */

angular.module('movTv')
  .factory('StorageService', function ($window) {
    function saveToken (token) {
      $window.localStorage.setItem('authToken', token)
    }

    function getToken () {
      return $window.localStorage.getItem('authToken')
    }

    function removeToken () {
      $window.localStorage.removeItem('authToken')
    }

    return { saveToken, getToken, removeToken }
  })
