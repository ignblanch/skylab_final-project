const Comment = require('../../../models/Comment')

function markCommentSpoiler (req, res) {
  console.log('entered addcomment')
  let {id} = req.params

  Comment.findByIdAndUpdate(id, {$set: {spoiler: true}})
    .then(() => res.send(`Comment marked as spam`))
}

module.exports = markCommentSpoiler
