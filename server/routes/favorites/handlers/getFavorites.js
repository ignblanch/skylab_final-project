const Favorite = require('../../../models/Favorite')

function getFavorites (req, res) {
  Favorite.find()
    .then(data => res.json(data))
}

module.exports = getFavorites
