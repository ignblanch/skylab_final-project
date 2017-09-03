/* global angular */

angular.module('movTv')
  .factory('CommentsService', function ($http) {
    function getCommentsByFilm (imdbID) {
      const url = `/comments/${imdbID}`
      return $http.get(url)
    }
    function getCommentsByAuthor (author) {
      const url = `/comments/author/${author}`
      return $http.get(url)
    }

    function addComment (author, commentTitle, stars, imdbID, body, spoiler) {
      const url = `comments/${author}/${commentTitle}/${stars}/${imdbID}/${body}/${spoiler}`
      return $http.post(url)
    }

    function removeComment (id) {
      const url = `comments/${id}`
      return $http.delete(url)
    }

    function markCommentSpoiler (id) {
      const url = `comments/${id}`
      return $http.post(url)
    }

    return {
      getCommentsByFilm: getCommentsByFilm,
      getCommentsByAuthor: getCommentsByAuthor,
      addComment: addComment,
      removeComment: removeComment,
      markCommentSpoiler: markCommentSpoiler
    }
  })