const Favorite = require('../../../models/Favorite')

function addFavorite (req, res) {
  console.log('entered addFavorite')
  let {user, imdbID, stars} = req.params
  console.log(stars)
  stars = parseInt(stars)
  console.log(stars)

  const favorite = new Favorite({user, imdbID, stars})

  favorite.save()
    .then(() => res.send(`Added movie with ID ${imdbID} to favorites`))
    .catch(console.log('Error adding favorite'))
}

module.exports = addFavorite
