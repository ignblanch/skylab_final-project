const mongoose = require('mongoose')

const collection = 'favorites'

let FavoriteSchema = new mongoose.Schema({
  user: {
    type: String,
    default: 'defaultUser'
  },
  imdbID: {
    type: String,
    default: 0
  },
  stars: {
    type: Number,
    default: 0
  }
}, { collection })

module.exports = mongoose.model('Favorite', FavoriteSchema)
