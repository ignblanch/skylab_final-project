const Comment = require('../../../models/Comment')

function addComment (req, res) {
  console.log('entered addcomment')
  let {author, commentTitle, stars, imdbID, body, spoiler} = req.params
  stars = parseInt(stars)

  const comment = new Comment({author, commentTitle, stars, imdbID, body, spoiler})

  comment.save()
    .then(() => res.send(`Added comment from ${author} to comments`))
}

module.exports = addComment
