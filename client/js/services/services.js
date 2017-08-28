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
    function getFavoritesByUser (user) {
      console.log(user)
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

    return {
      getFavoritesByUser: getFavoritesByUser,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
      getFavorite: getFavorite
    }
  })
  .factory('CommentsService', function ($http) {
    function getCommentsByFilm (imdbID) {
      const url = `/comments/${imdbID}`
      return $http.get(url)
    }
    function getCommentsByAuthor (author) {
      const url = `/comments/${author}`
      return $http.get(url)
    }

    function addComment (author, commentTitle, stars, imdbID, body, spoiler) {
      console.log('entered addComment')
      const url = `comments/${author}/${commentTitle}/${stars}/${imdbID}/${body}/${spoiler}`
      return $http.post(url)
    }

    function removeComment (id) {
      const url = `comments/${id}`
      return $http.delete(url)
    }

    return {
      getCommentsByFilm: getCommentsByFilm,
      getCommentsByAuthor: getCommentsByAuthor,
      addComment: addComment,
      removeComment: removeComment
    }
  })
