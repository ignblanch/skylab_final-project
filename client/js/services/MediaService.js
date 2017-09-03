/* global angular */

angular.module('movTv')
  .factory('MediaService', function ($http) {
    // const apiKey = `&apikey=7dbc754c`

    function searchMedia (title) {
      // const url = `http://www.omdbapi.com/?s=${title}${apiKey}`
      const url = `/media/${title}`
      return $http.get(url)
    }

    function searchDetail (imdbID) {
      // const url = `http://www.omdbapi.com/?i=${imdbID}${apiKey}`
      const url = `/media/detail/${imdbID}`
      return $http.get(url)
    }
    return {
      searchMedia: searchMedia,
      searchDetail: searchDetail
    }
  })