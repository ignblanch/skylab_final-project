const mongoose = require('mongoose')

const collection = 'favorites'

let FavoriteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  posterUrl: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    default: 0
  },
  imdbId: {
    type: Number,
    default: 0
  }
}, { collection })

module.exports = mongoose.model('Favorite', FavoriteSchema)
