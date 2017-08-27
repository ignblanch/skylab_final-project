const Favorite = require('../../../models/Favorite')

function addFavorite (req, res) {
  const { title, imdbId, posterUrl, stars } = req.params
  const favorite = new Favorite({ title, imdbId, posterUrl, stars })

  favorite.save()
    .then(() => res.send(`Added ${title} to favorites`))
}

module.exports = addFavorite
