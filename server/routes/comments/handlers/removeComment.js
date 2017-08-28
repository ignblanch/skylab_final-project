const Comment = require('../../../models/Comment')

function removeComment (req, res) {
  const { id } = req.params
  Comment.findByIdAndRemove(id)
    .then(() => res.send(`Comment with id ${id} removed correctly`))
    .catch(() => res.send(`FAIL!! Fav w/ id ${id} was NOT removed`))
}

module.exports = removeComment
