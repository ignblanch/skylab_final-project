const Favorite = require('../../../models/Favorite')

function getFavoritesByUser (req, res) {
  const {user} = req.params
  console.log(user)
  Favorite.find({'user': user})
    .then(data => res.json(data))
}

module.exports = getFavoritesByUser
