const Comment = require('../../../models/Comment')

function getCommentsByFilm (req, res) {
  const {imdbID} = req.params
  Comment.find({'imdbID': imdbID})
    .then(data => res.json(data))
}

module.exports = getCommentsByFilm
