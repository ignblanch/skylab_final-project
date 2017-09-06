const Comment = require('../../../models/Comment')

function markCommentSpoiler (req, res) {
  let {id} = req.params

  Comment.findByIdAndUpdate(id, {$set: {spoiler: true}})
    .then(() => res.send(`Comment marked as spoiler`))
}

module.exports = markCommentSpoiler
