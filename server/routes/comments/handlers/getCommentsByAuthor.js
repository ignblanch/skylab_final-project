const Comment = require('../../../models/Comment')

function getCommentsByAuthor (req, res) {
  const {author} = req.params
  Comment.find({'author': author})
    .then(data => res.json(data))
}

module.exports = getCommentsByAuthor
