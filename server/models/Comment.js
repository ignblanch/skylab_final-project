const mongoose = require('mongoose')

const collection = 'comments'

let CommentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
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
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  spoiler: {
    type: Boolean,
    default: false
  }
}, { collection })

module.exports = mongoose.model('Comment', CommentSchema)
