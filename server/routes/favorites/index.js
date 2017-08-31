const express = require('express')
const router = express.Router()

const addFavorite = require('./handlers/addFavorite')
const getFavoritesByUser = require('./handlers/getFavoritesByUser')
const removeFavorite = require('./handlers/removeFavorite')
const getFavorite = require('./handlers/getFavorite')
const editStarsFav = require('./handlers/editStarsFav')

router.get('/:user', getFavoritesByUser)
router.post('/:user/:imdbID/:stars', addFavorite)
router.put('/:favId/:newStars', editStarsFav)
router.delete('/:user/:imdbID', removeFavorite)
router.get('/:user/:imdbID', getFavorite)

module.exports = router
