const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')

const addFavorite = require('./handlers/addFavorite')
const getFavoritesByUser = require('./handlers/getFavoritesByUser')
const removeFavorite = require('./handlers/removeFavorite')
const getFavorite = require('./handlers/getFavorite')
const editStarsFav = require('./handlers/editStarsFav')

// router.use( passport.authenticate('jwt', { session: false }) )

router.get('/:user', getFavoritesByUser)
router.post('/:user/:imdbID/:stars', passport.authenticate('jwt', { session: false }), addFavorite)
router.put('/:favId/:newStars', passport.authenticate('jwt', { session: false }), editStarsFav)
router.delete('/:user/:imdbID', removeFavorite)
router.get('/:user/:imdbID', getFavorite)

module.exports = router
