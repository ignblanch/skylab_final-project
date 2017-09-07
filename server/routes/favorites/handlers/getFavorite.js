const Favorite = require('../../../models/Favorite')

function getFavorite (req, res) {
  const { user, imdbID } = req.params
  Favorite.findOne({'user': user, 'imdbID': imdbID})
    .then((data) => res.json(data))
    .catch(() => res.send(`FAIL!!`))
}

module.exports = getFavorite
