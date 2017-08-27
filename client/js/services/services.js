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
  .factory('FavoritesService', function ($http) {
    function getFavorites () {
      const url = `/favorites`
      return $http.get(url)
    }

    function addFavorite (title, imdbId, posterUrl, stars) {
      const url = `favorites/:title/:imdbID:/posterUrl:/stars`
      return $http.post(url)
    }

    function removeFavorite (imdbID) {
      const url = `favorites/:imdbId`
      return $http.delete(url)
    }

    return {
      getFavorites: getFavorites,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite
    }
  })
