const express = require('express')
const router = express.Router()

const addFavorite = require('./handlers/addFavorite')
const getFavorites = require('./handlers/getFavorites')
const removeFavorite = require('./handlers/removeFavorite')

router.post('/', addFavorite)
router.get('/', getFavorites)
router.delete('/:imdbId', removeFavorite)

module.exports = router
