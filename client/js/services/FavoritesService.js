/* global angular */

angular.module('movTv')
  .factory('FavoritesService', function ($http) {
    function getFavoritesByUser (user) {
      const url = `/favorites/${user}`
      return $http.get(url)
    }

    function addFavorite (user, imdbID, stars) {
      const url = `favorites/${user}/${imdbID}/${stars}`
      return $http.post(url)
    }

    function removeFavorite (user, imdbID) {
      const url = `favorites/${user}/${imdbID}`
      return $http.delete(url)
    }

    function getFavorite (user, imdbID) {
      const url = `favorites/${user}/${imdbID}`
      return $http.get(url)
    }

    function editStarsFav (FavId, newStars) {
      const url = `favorites/${FavId}/${newStars}`
      return $http.put(url)
    }

    return { getFavoritesByUser, addFavorite, removeFavorite, getFavorite, editStarsFav }
  })
