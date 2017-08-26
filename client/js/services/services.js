/* global angular */

angular.module('movTv')
  .factory('MediaService', function ($http) {
    const apiKey = `&apikey=7dbc754c`

    function searchMedia (title) {
      const url = `http://www.omdbapi.com/?s=${title}${apiKey}`
      return $http.get(url)
    }

    function searchDetail (imdbID) {
      const url = `http://www.omdbapi.com/?i=${imdbID}${apiKey}`
      return $http.get(url)
    }
    return {
      searchMedia: searchMedia,
      searchDetail: searchDetail
    }
  })
