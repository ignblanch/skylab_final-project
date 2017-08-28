const Favorite = require('../../../models/Favorite')

function removeFavorite (req, res) {
  const { imdbID, user } = req.params
  Favorite.findOneAndRemove({imdbID: imdbID, user: user})
    .then(() => res.send(`Fav with id ${imdbID} removed correctly`))
    .catch(() => res.send(`FAIL!! Fav w/ id ${imdbID} was NOT removed`))
}

module.exports = removeFavorite
