/* global angular */

angular.module('movTv')
.factory('AuthInterceptor', function (StorageService) {
  return {
    request: function (config) {
      const token = StorageService.getToken()
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    }
  }
})
