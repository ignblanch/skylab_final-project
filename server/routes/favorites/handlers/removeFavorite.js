const Task = require('../../../models/Favorite')

function removeFavorite (req, res) {
  const { id } = req.params.imdbID
  Task.findAndRemove({imdbID: id})
    .then(() => res.send(`ok`))
    .catch(() => res.send(`FAIL!! Task w/ id ${id} was NOT removed`))
}

module.exports = removeFavorite
