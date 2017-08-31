const Favorite = require('../../../models/Favorite')

function editStarsFav (req, res) {
  let {favId, newStars} = req.params

  Favorite.findByIdAndUpdate(favId, {$set: {stars: newStars}})
    .then(() => res.send(`Stars updated`))
}

module.exports = editStarsFav
