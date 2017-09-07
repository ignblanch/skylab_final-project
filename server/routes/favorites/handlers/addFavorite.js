const Favorite = require('../../../models/Favorite')

function addFavorite (req, res) {
  let {user, imdbID, stars} = req.params
  stars = parseInt(stars)

  const favorite = new Favorite({user, imdbID, stars})

  favorite.save()
    .then(() => res.send(`Added movie with ID ${imdbID} to favorites`))
    .catch(console.log('Error adding favorite'))
}

module.exports = addFavorite
